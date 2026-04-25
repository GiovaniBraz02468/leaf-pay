using Backend.Shared;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Features.Auth;

public class RegisterUserController : ApiControllerBase
{
    [HttpPost("api/auth/register")]
    public async Task<ApiResponse<object>> Register([FromBody] RegisterCommand command, [FromServices] UserManager<IdentityUser> userManager)
    {
        var user = new IdentityUser
        {
            UserName = command.Email,
            Email = command.Email
        };

        var result = await userManager.CreateAsync(user, command.Password);

        if (!result.Succeeded)
            return ApiResponse<object> .Fail(string.Join(",", result.Errors.Select(e => e.Description)));

        return ApiResponse<object> .Ok(new { Email = command.Email }, "User registered successfully");    
    }
}

public class RegisterCommand
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}