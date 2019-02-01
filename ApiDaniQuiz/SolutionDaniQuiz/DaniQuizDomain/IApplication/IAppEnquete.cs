using DaniQuizDomain.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace DaniQuizDomain.IApplication
{
    public interface IAppEnquete
    {
        Envelope<Enquete> Cadastrar(Enquete novaEnquete);
    }
}
