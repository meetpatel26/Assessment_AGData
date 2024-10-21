using Assessment_AGData.Server.Models;

namespace Assessment_AGData.Server.Services
{
    public class PersonService : IPersonService
    {
        private readonly List<Person> _persons = new();

        /// <summary>
        /// Adds a new person to the list and returns the added person.
        /// </summary>
        /// <param name="person">The person object to be added.</param>
        /// <returns>The person object that was added.</returns>
        public Person AddPerson(Person person)
        {
            _persons.Add(person);
            return person;
        }

        /// <summary>
        /// Retrieves the list of all persons.
        /// </summary>
        /// <returns>A list of person objects.</returns>
        public IList<Person> GetPersons()
        {
            return _persons;
        }
    }
}
