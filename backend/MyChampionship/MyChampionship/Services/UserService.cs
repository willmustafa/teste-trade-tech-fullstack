using Microsoft.EntityFrameworkCore;
using MyChampionship.Context;
using MyChampionship.Models;

namespace MyChampionship.Services
{
    public class UserService
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public UserService(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public async Task<bool> Register(User user)
        {
            if (await _applicationDbContext.Users.AnyAsync(u => u.Username == user.Username))
            {
                return false;
            }

            _applicationDbContext.Users.Add(user);
            await _applicationDbContext.SaveChangesAsync();

            return true;
        }

        public async Task<User> Authenticate(string username, string password)
        {
            return _applicationDbContext.Users.FirstOrDefault(u => u.Username == username && u.Password == password);
        }
    }
}
