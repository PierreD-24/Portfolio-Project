using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string? DetailedDescription { get; set; }
        public List<string> Technologies { get; set; } = new();
        public string? GitHubUrl { get; set; }
        public string? LiveUrl { get; set; }
        public string? ImageUrl { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsFeatured { get; set; }
    }
}