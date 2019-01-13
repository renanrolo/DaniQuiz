using DaniQuizDomain.Entidades;

namespace DaniQuizDomain.IApplication
{
    public interface IAppUsuarioLogin
    {
        UsuarioLogin Find(string email);
    }
}
