using DaniQuizDomain.Entidades;
using DaniQuizDomain.IApplication;
using DaniQuizRepositories.Contextos;

namespace DaniQuizApplication.Implementacao
{
    public class AppCadastrar : IAppCadastrar
    {
        private DaniQuizContext _daniQuizContext { get; set; }
        public AppCadastrar(DaniQuizContext daniQuizContext)
        {
            _daniQuizContext = daniQuizContext;
        }

        public UsuarioLogin NovoLogin(UsuarioLogin usuarioLogin)
        {
            _daniQuizContext.UsuarioLogin.Add(usuarioLogin);

            _daniQuizContext.Usuario.Add(new Usuario() { Email = usuarioLogin.Email });

            _daniQuizContext.SaveChanges();

            return usuarioLogin;
        }
    }
}
