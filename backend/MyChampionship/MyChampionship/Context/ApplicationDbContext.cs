using Microsoft.EntityFrameworkCore;
using MyChampionship.Models;

namespace MyChampionship.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        public DbSet<MyChampionship.Models.Team>? Team { get; set; }

        public DbSet<MyChampionship.Models.Game>? Game { get; set; }

        public DbSet<MyChampionship.Models.Tournament>? Tournament { get; set; }
    }
}
