using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyChampionship.Models
{
    [Table("User")]
    public class User
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Username")]
        public string Username { get; set; } = null!;

        [Column("Password")]
        public string Password { get; set; } = null!;

        [Column("Email")]
        public string Email { get; set; } = null!;

        [Column("Name")]
        public string Name { get; set; } = null!;
    }
}
