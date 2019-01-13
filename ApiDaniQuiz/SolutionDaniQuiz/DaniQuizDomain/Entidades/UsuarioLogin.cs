using System.ComponentModel.DataAnnotations;

namespace DaniQuizDomain.Entidades
{
    public class UsuarioLogin
    {
        [Key]
        public string Email { get; set; }

        public string Senha { get; set; }
    }
}
