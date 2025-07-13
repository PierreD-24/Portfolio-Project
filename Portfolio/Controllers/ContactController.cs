using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private static readonly List<ContactMessage> ContactMessages = new();

        [HttpPost]
        public ActionResult<ContactMessage> SubmitContactForm(ContactMessage message)
        {
            if (string.IsNullOrWhiteSpace(message.Name) ||
                string.IsNullOrWhiteSpace(message.Email) ||
                string.IsNullOrWhiteSpace(message.Message))
            {
                return BadRequest("Name, email, and message are required");
            }

            message.Id = ContactMessages.Count + 1;
            message.CreatedAt = DateTime.UtcNow;

            ContactMessages.Add(message);

            return CreatedAtAction(nameof(GetContactMessage), new { id = message.Id }, message);
        }

        [HttpGet("{id}")]
        public ActionResult<ContactMessage> GetContactMessage(int id)
        {
            var message = ContactMessages.FirstOrDefault(m => m.Id == id);
            if (message == null)
                return NotFound();

            return Ok(message);
        }

        [HttpGet]
        public ActionResult<IEnumerable<ContactMessage>> GetAllContactMessages()
        {
            return Ok(ContactMessages.OrderByDescending(m => m.CreatedAt));
        }
    }
}