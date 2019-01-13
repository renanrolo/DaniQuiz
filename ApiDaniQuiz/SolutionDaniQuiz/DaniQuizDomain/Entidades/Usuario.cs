using System.ComponentModel.DataAnnotations;

namespace DaniQuizDomain.Entidades
{
    public class Usuario
    {
        [Key]
        public string Email { get; set; }
    }
}
