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
                 DetailedDescription = "The Workout Tracker is a comprehensive web application featuring secure user authentication, complete CRUD operations for workout management, and a robust progress tracking system. Users can create personalized workout routines, plan daily exercises through the 'Today's Workouts' feature, and maintain detailed workout history with actual performance metrics. The application includes interactive progress visualization using Chart.js, search functionality for workouts, and a responsive Bootstrap-based design. Built with ASP.NET Core MVC, MySQL database with Dapper ORM, and implementing the repository pattern with dependency injection, the project demonstrates modern web development practices including secure password hashing with BCrypt, parameterized queries for SQL injection prevention, and claims-based authentication with session management.",
                 Technologies = new List<string> { "C#", "ASP.NET", "React", "Dapper" },
                 GitHubUrl = "https://github.com/PierreD-24",
                 LiveUrl = "https://yourportfolio.com",
                 Images = new List<string>
                    {
                        "/images/project-photos/Project-photo-1.png",
                        "/images/project-photos/Project-photo-2.png",
                        "/images/project-photos/Project-photo-3.png",
                        "/images/project-photos/Project-photo-4.png",
                        "/images/project-photos/Project-photo-5.png"
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