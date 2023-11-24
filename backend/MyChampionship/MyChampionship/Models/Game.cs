using System.ComponentModel.DataAnnotations;

namespace MyChampionship.Models
{
    public class Game
    {
        [Key]
        public int Id { get; set; }

        public int Round { get; set; }

        public DateTime StartTime { get; set; } = DateTime.Now;

        public string State { get; set; } = null!;

        [Required]
        public virtual Team TeamA { get; set; } = null!;

        [Required]
        public virtual Team TeamB { get; set; } = null!;

        public int goalsA { get; set; }

        public int goalsB { get; set;}
    }
}
