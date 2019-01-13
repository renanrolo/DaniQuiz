using DaniQuizDomain.Entidades;

namespace DaniQuizDomain.IRepositories
{
    public interface IUsuarioLoginRepositorio
    {
        UsuarioLogin Find(string id);
    }
}
