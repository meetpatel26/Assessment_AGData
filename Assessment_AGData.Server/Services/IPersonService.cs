using Assessment_AGData.Server.Models;

namespace Assessment_AGData.Server.Services
{
    public interface IPersonService
    {
        // Adds a new person and returns the added person.
        Person AddPerson(Person person);

        // Retrieves a list of all persons.
        IList<Person> GetPersons();
    }
}
