using DaniQuizApi.Autenticacao;
using DaniQuizDomain.Entidades;
using DaniQuizDomain.IApplication;
using DaniQuizRepositories.Contextos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace DaniQuizApi.Controllers
{
    [Route("api/[controller]")]
    [Authorize("Bearer")]
    public class LoginController : Controller
    {
        private DaniQuizContext _context { get; set; }
        public LoginController(DaniQuizContext context)
        {
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost]
        public object Post(
            [FromBody]UsuarioLogin usuario,
            [FromServices]IAppUsuarioLogin usersDAO,
            [FromServices]SigningConfigurations signingConfigurations,
            [FromServices]TokenConfigurations tokenConfigurations)
        {
            bool credenciaisValidas = false;
            if (usuario != null && !String.IsNullOrWhiteSpace(usuario.Email))
            {
                var usuarioBase = usersDAO.Find(usuario.Email);
                credenciaisValidas = (usuarioBase != null &&
                    usuario.Email == usuarioBase.Email &&
                    usuario.Senha == usuarioBase.Senha);
            }

            if (credenciaisValidas)
            {
                return AutenticarUsuarioLogin.Autenticar(usuario);
            }
            else
            {
                return new
                {
                    authenticated = false,
                    message = "Falha ao autenticar"
                };
            }
        }


        [AllowAnonymous]
        [HttpGet]
        public object Get(
            [FromServices]IAppUsuarioLogin usersDAO)
        {
            _context.UsuarioLogin.Add(new UsuarioLogin() { Senha = "teste", Email = "teste@teste" });

            _context.SaveChanges();

            var contexxxxxxt = usersDAO.Find("teste@teste");

            return "teste";
        }
    }
}