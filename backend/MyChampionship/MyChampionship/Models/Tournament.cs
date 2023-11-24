using System.ComponentModel.DataAnnotations;

namespace MyChampionship.Models
{
    public class Tournament
    {
        [Key]
        public int Id { get; set; }

        public DateTime StartTime { get; set; } = DateTime.Now;

        public string State { get; set; } = null!;

        public virtual ICollection<Game> Games { get; set; } = null!;

        public virtual ICollection<TournamentTeam> Teams { get; set; } = null!;
    }
}
