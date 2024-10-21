using System.ComponentModel.DataAnnotations;

namespace Assessment_AGData.Server.Models
{
    public class Person
    {
        // Name property is required and cannot be null.
        [Required]
        public string? Name { get; set; }
        public string? Address { get; set; }
    }
}
