using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using project_angular_asp.net_Core.Models;

namespace project_angular_asp.net_Core.Persistence
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<Make> Makes { get; set; }
        public ApplicationDbContext(DbContextOptions options)
                : base(options)
        {
        } 
    }
}