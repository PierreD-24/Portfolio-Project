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
                 Title = "Workout Planner",
                 Description = "A full-stack fitness tracking web application built with ASP.NET Core MVC that allows users to manage workout routines, track daily exercise plans, and visualize progress through interactive charts.",
                 DetailedDescription = "I built this fitness tracking app using ASP.NET Core MVC and MySQL to help people stay organized with their workouts. The application uses the repository pattern and dependency injection for clean code organization, while implementing secure user authentication with password hashing and session management. I designed a relational database to store workout templates, user selections, and exercise history, then created an intuitive interface using Bootstrap and Chart.js for progress visualization. The project showcases essential web development skills including CRUD operations, database design, user authentication, and responsive design while addressing the common challenge of tracking fitness progress effectively.",
                 Technologies = new List<string> { "C#", "ASP.NET", "React", "Dapper" },
                 GitHubUrl = "https://github.com/PierreD-24",
                 LiveUrl = "https://yourportfolio.com",
                 Images = new List<string>
                    {
                        "/images/project-photos/Project-photo-1.PNG",
                        "/images/project-photos/Project-photo-2.PNG",
                        "/images/project-photos/Project-photo-3.PNG",
                        "/images/project-photos/Project-photo-4.PNG",
                        "/images/project-photos/Project-photo-5.PNG"
                    },
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