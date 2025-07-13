using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SkillsController : ControllerBase
    {
        private static readonly List<Skills> Skills = new()
        {
            new Skills
            {
                Id = 1,
                Name = "C#",
                Category = "Backend",
                ProficiencyLevel = 4
            },
            new Skills
            {
                Id = 2,
                Name = "ASP.NET Core",
                Category = "Backend",
                ProficiencyLevel = 4
            },
             new Skills
            {
                Id = 4,
                Name = "React",
                Category = "Frontend",
                ProficiencyLevel = 3
            },
            new Skills
            {
                Id = 5,
                Name = "SQL Server",
                Category = "Database",
                ProficiencyLevel = 3
            },
            new Skills
            {
                Id = 6,
                Name = "Git",
                Category = "Tools",
                ProficiencyLevel = 4
            }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Skills>> GetAllSkills()
        {
            return Ok(Skills);
        }

        [HttpGet("category/{category}")]
        public ActionResult<IEnumerable<Skills>> GetSkillsByCategory(string category)
        {
            var skills = Skills.Where(s => s.Category.Equals(category, StringComparison.OrdinalIgnoreCase)).ToList();
            return Ok(skills);
        }

        [HttpGet("categories")]
        public ActionResult<IEnumerable<string>> GetCategories()
        {
            var categories = Skills.Select(s => s.Category).Distinct().ToList();
            return Ok(categories);
        }
    }
}