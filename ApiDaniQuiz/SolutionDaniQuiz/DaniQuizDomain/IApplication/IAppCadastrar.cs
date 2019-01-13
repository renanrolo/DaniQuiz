using System;
using System.Collections.Generic;
using System.Text;
using DaniQuizDomain.Entidades;

namespace DaniQuizDomain.IApplication
{
    public interface IAppCadastrar
    {
        UsuarioLogin NovoLogin(UsuarioLogin usuarioLogin);
    }
}
