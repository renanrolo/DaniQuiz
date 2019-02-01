using DaniQuizDomain.Entidades;
using DaniQuizDomain.IApplication;
using DaniQuizRepositories.Contextos;
using System.Linq;

namespace DaniQuizApplication.Implementacao
{
    public class AppCadastrar : IAppCadastrar
    {
        private DaniQuizContext _daniQuizContext { get; set; }
        public AppCadastrar(DaniQuizContext daniQuizContext)
        {
            _daniQuizContext = daniQuizContext;
        }

        public Envelope<UsuarioLogin> NovoLogin(UsuarioLogin usuarioLogin)
        {
            if (_daniQuizContext.UsuarioLogin.Any(x => x.Email == usuarioLogin.Email))
                return new Envelope<UsuarioLogin>() { Message = "Email já está em uso." };

            _daniQuizContext.UsuarioLogin.Add(usuarioLogin);
            _daniQuizContext.Usuario.Add(new Usuario() { Email = usuarioLogin.Email });
            _daniQuizContext.SaveChanges();

            return new Envelope<UsuarioLogin>(usuarioLogin);
        }
    }
}
