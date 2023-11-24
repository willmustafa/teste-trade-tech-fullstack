using System.ComponentModel.DataAnnotations;

namespace MyChampionship.Models
{
    public class Team
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = null!;
    }
}
