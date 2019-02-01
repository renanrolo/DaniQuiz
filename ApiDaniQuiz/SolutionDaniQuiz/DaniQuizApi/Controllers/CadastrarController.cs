using DaniQuizApi.Autenticacao;
using DaniQuizDomain.Entidades;
using DaniQuizDomain.IApplication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Web.Http.Cors;

namespace DaniQuizApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Cadastrar")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CadastrarController : Controller
    {
        private IAppCadastrar _appCadastrar { get; set; }

        public CadastrarController(IAppCadastrar iAppCadastrar)
        {
            _appCadastrar = iAppCadastrar;
        }

        [HttpPost]
        [AllowAnonymous]
        public object Post([FromBody]NovoLogin novoLogin)
        {
            if (!ModelState.IsValid)
                return new { status = false, mensagem = "E-mail e senha são obrigatórios!" };

            var usuarioLoginCriado = _appCadastrar.NovoLogin(new UsuarioLogin()
                {
                    Email = novoLogin.Email,
                    Senha = novoLogin.Password
                });

            if (usuarioLoginCriado.Status)
                return AutenticarUsuarioLogin.Autenticar(usuarioLoginCriado.Body);

            return usuarioLoginCriado;
        }


        [HttpGet]
        [AllowAnonymous]
        public object Get()
        {
            return new { status = true };
        }
    }

    public class NovoLogin
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}