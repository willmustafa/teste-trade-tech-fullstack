using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MyChampionship.Models;
using MyChampionship.Services;

namespace MyChampionship.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly AuthService _authService;

        public AuthController(UserService userService, AuthService authService)
        {
            _userService = userService;
            _authService = authService;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] Login user)
        {
            var foundUser = await _userService.Authenticate(user.Username, user.Password);

            if (foundUser == null)
            {
                return Unauthorized(new { Mensagem = "Credenciais inválidas." });
            }

            var token = _authService.GenerateToken(foundUser);

            return Ok(new { token });
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            var registered = await _userService.Register(user);

            if (!registered)
            {
                return BadRequest(new { Mensagem = "Usuário já registrado." });
            }

            var token = await Login(new Login { Username = user.Username, Password = user.Password });

            return token;
        }
    }
}
