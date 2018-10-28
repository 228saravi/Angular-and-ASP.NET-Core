using Microsoft.EntityFrameworkCore;
using project_angular_asp.net_Core.Models;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace project_angular_asp.net_Core.Persistence
{
    public class ProjectDbContext : DbContext
    {
        public DbSet<Make> Makes { get; set; }
        public ProjectDbContext(DbContextOptions<ProjectDbContext> options)
            :base(options)
        {
            
        }
    }
}