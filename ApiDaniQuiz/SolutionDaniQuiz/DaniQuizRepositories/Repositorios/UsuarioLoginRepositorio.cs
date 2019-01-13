using DaniQuizDomain.Entidades;
using DaniQuizDomain.IRepositories;
using DaniQuizRepositories.Contextos;
using System;
using System.Collections.Generic;
using System.Text;

namespace DaniQuizRepositories.Repositorios
{
    public class UsuarioLoginRepositorio : IUsuarioLoginRepositorio
    {
        private DaniQuizContext _context { get; set; }

        public UsuarioLoginRepositorio(DaniQuizContext context)
        {
            _context = context;
        }

        public UsuarioLogin Find(string id)
        {
            return _context.UsuarioLogin.Find(id);
        }
    }
}
