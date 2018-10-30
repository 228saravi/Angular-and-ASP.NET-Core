using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using project_angular_asp.net_Core.Models;
using project_angular_asp.net_Core.Persistence;

namespace project_angular_asp.net_Core.Controllers
{
    [Route("api/[controller]")]
    public class HeroController:Controller
    {
        private ApplicationDbContext  db;
        public HeroController(ApplicationDbContext  context)
        {
            db = context;
        }
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return Ok(await db.Hero.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Hero hero)
        {
            db.Hero.Add(hero);
            await db.SaveChangesAsync();
            return Ok();
        }
        [HttpPost]
        public async Task<IActionResult> Edit([FromBody]Hero hero)
        {
            db.Hero.Update(hero);
            await db.SaveChangesAsync();
            return Ok();
        }
        [HttpPost]
        public async Task<IActionResult> Delete([FromBody]int? id)
        {
            if (id != null)
            {
                Hero hero = await db.Hero.FirstOrDefaultAsync(p => p.Id == id);
                if (hero != null)
                {
                    db.Hero.Remove(hero);
                    await db.SaveChangesAsync();
                    return Ok();
                }
            }
            return NotFound();
        }
    }
}