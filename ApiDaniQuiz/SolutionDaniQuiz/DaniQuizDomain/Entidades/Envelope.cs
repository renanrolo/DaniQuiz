using System;
using System.Collections.Generic;
using System.Text;

namespace DaniQuizDomain.Entidades
{
    public class Envelope<T>
    {
        public Boolean Status { get; set; }

        public string Message { get; set; }

        public T Body { get; set; }

        /// <summary>
        ///     Sucesso
        /// </summary>
        /// <param name="body"></param>
        public Envelope(T body)
        {
            Status = true;
            Body = body;
        }

        /// <summary>
        ///     Erro
        /// </summary>
        public Envelope()
        {
            Status = false;
        }
    }
}
