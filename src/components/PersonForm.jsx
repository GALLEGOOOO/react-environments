import personService from "../services/personService";

export const PersonForm = ({ newName, setNewName, newNumber, handleNewNumber, persons, setPersons }) => {

    const addNewPerson = (event) => {
		event.preventDefault();
        const personFound = persons.find(person => (person.name === newName));
		if (personFound === undefined) {
			const newPerson = {
				id: Date.now(),
				name: newName,
				number: newNumber
			}
            personService.createPerson(newPerson).then((data) => {
			setPersons([...persons, data])

            })
		} else {
            const updatePerson = {
				id: personFound.id,
				name: personFound.name,
				number: newNumber
			}
			if(confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
                personService.updatePerson(updatePerson).then(data => {
                    personService.getAllPersons().then(persons => {
                        setPersons(persons)
                    })
                });
            }
		}
	};

    return (
        <div>
            <h2>Add a New Person:</h2>
                <form onSubmit={ addNewPerson }>
                    <div>
                        <label htmlFor="new-Name">Name: </label>
                        <input id="new-Name" value={ newName } onChange={ setNewName } />
                        <br /><br />
                        <label htmlFor="new-Number">Number: </label>
                        <input id="new-Number" value={ newNumber } onChange={ handleNewNumber } />
                    </div>
                    <br /><br />
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
        </div>
    );

}