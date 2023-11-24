using System.ComponentModel.DataAnnotations;

namespace MyChampionship.Models
{
    public class TournamentTeam
    {
        [Key]
        public int Id { get; set; }

        public virtual Team Team { get; set; } = null!;

        public virtual Tournament Tournament { get; set; } = null!;
    }
}
