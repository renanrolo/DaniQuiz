using System;
using System.ComponentModel.DataAnnotations;

namespace DaniQuizDomain.Entidades
{
    public class Enquete
    {
        [Key]
        public int EnqueteId { get; set; }
        public string NomeReduzido { get; set; }
        public string Titulo { get; set; }
        public string Pergunta { get; set; }
        public string UsuarioCriacao { get; set; }
        public DateTime DataCriacao { get; set; }
    }
}
