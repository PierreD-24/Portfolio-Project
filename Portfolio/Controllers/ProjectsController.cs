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
    public class ProjectsController : ControllerBase
    {
        private static readonly List<Project> Projects = new()
        {
            new Project
            {
                 Id = 1,
                 Title = "A sample project",
                 Description = "A sample project to showcase skills",
                 DetailedDescription = "Detailed Description",
                 Technologies = new List<string> { "C#", "ASP.NET", "React", "Dapper" },
                 GitHubUrl = "https://github.com/PierreD-24",
                 CreatedDate = DateTime.UtcNow.AddDays(-30),
                 IsFeatured = true,
            },
                        new Project
            {
                 Id = 2,
                 Title = "Another sample project",
                 Description = "A sample project to showcase skills",
                 DetailedDescription = "Detailed Description",
                 Technologies = new List<string> { "C#", "ASP.NET", "React", "Dapper" },
                 GitHubUrl = "https://github.com/PierreD-24",
                 CreatedDate = DateTime.UtcNow.AddDays(-30),
                 IsFeatured = true,
            },
        };

        [HttpGet]
        public ActionResult<IEnumerable<Project>> GetAllProjects()
        {
            return Ok(Projects);
        }

        [HttpGet("{id}")]
        public ActionResult<Project> GetProject(int id)
        {
            var project = Projects.FirstOrDefault(p => p.Id == id);
            if (project == null)
                return NotFound();

            return Ok(project);
        }

        [HttpGet("featured")]
        public ActionResult<IEnumerable<Project>> GetFeaturedProject()
        {
            var featuredProject = Projects.Where(p => p.IsFeatured).ToList();
            return Ok(featuredProject);
        }
    }
}