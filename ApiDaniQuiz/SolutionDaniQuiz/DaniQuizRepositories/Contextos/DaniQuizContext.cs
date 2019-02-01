using DaniQuizDomain.Entidades;
using Microsoft.EntityFrameworkCore;

namespace DaniQuizRepositories.Contextos
{
    public class DaniQuizContext : DbContext
    {
        public DaniQuizContext(DbContextOptions<DaniQuizContext> options) :
            base(options)
        {
        }

        public DbSet<UsuarioLogin> UsuarioLogin { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Enquete> Enquete { get; set; }

        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UsuarioLogin>(entidade => entidade.Property(e => e.Email).IsRequired());

            modelBuilder.Entity<Usuario>(entidade => entidade.Property(e => e.Email).IsRequired());



            //modelBuilder.Entity<UsuarioLogin>().HasData(
            //  new UsuarioLogin() { UsuarioLoginId = "teste@teste", AccessKey = "teste" });

        }
    }
}
