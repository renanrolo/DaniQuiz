using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using DaniQuizDomain.Entidades;
using DaniQuizDomain.IApplication;

namespace DaniQuizApi.Controllers
{
    [Authorize("Bearer")]
    [Produces("application/json")]
    [Route("api/CadastrarEnquete")]
    public class CadastrarEnqueteController : Controller
    {
        private IAppEnquete _appEnquete { get; set; }
        public CadastrarEnqueteController(IAppEnquete appEnquete)
        {
            _appEnquete = appEnquete;
        }

        [HttpPost]
        public object Post([FromBody]Enquete novaEnquete)
        {
            if (novaEnquete == null)
                return new { status = false, mensagem = "Existem campos obrigatórios que precisam ser preenchidos." };

            var appEnqueteCadastrar = _appEnquete.Cadastrar(new Enquete()
            {
                NomeReduzido = novaEnquete.NomeReduzido,
                Titulo = novaEnquete.Titulo,
                Pergunta = novaEnquete.Pergunta,
                UsuarioCriacao = User.Identity.Name,
                DataCriacao = DateTime.Now
            });

            return appEnqueteCadastrar;
        }
    }
}