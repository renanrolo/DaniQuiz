using DaniQuizDomain.Entidades;
using DaniQuizDomain.IApplication;
using DaniQuizRepositories.Contextos;
using System;
using System.Collections.Generic;
using System.Text;

namespace DaniQuizApplication.Implementacao
{
    public class AppEnquete : IAppEnquete
    {
        private DaniQuizContext _daniQuizContext { get; set; }
        public AppEnquete(DaniQuizContext daniQuizContext)
        {
            _daniQuizContext = daniQuizContext;
        }

        public Envelope<Enquete> Cadastrar(Enquete novaEnquete)
        {
            _daniQuizContext.Enquete.Add(novaEnquete);
            _daniQuizContext.SaveChanges();

            return new Envelope<Enquete>(novaEnquete);
        }
    }
}
