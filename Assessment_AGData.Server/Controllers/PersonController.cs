using Assessment_AGData.Server.Models;
using Assessment_AGData.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace Assessment_AGData.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly IPersonService _personService;

        // Constructor that injects IPersonService via dependency injection.
        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        /// <summary>
        /// Adds a new person if the model is valid, otherwise returns BadRequest.
        /// </summary>
        /// <param name="person">Person object received from the request body.</param>
        /// <returns>Returns Ok with the added person or BadRequest with model state.</returns>
        [HttpPost]
        public IActionResult AddPerson([FromBody] Person person)
        {
            if (ModelState.IsValid)
            {
                //Adds the person
                _personService.AddPerson(person);
                return Ok(person); 
            }
            return BadRequest(ModelState);
        }

        /// <summary>
        /// Retrieves all persons from the system.
        /// </summary>
        /// <returns>Returns Ok with a list of persons.</returns>
        [HttpGet]
        public IActionResult GetPersons()
        {
            return Ok(_personService.GetPersons());
        }

    }
}
