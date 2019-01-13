using DaniQuizDomain.Entidades;
using DaniQuizDomain.IApplication;
using DaniQuizRepositories.Contextos;

namespace DaniQuizApplication.Implementacao
{
    public class AppUsuarioLogin : IAppUsuarioLogin
    {
        private DaniQuizContext _daniQuizContext { get; set; }
        public AppUsuarioLogin(DaniQuizContext daniQuizContext)
        {
            _daniQuizContext = daniQuizContext;
        }

        public UsuarioLogin Find(string email)
        {
            return _daniQuizContext.UsuarioLogin.Find(email);
        }
    }
}
