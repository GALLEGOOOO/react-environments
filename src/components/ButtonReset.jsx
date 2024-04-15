import personService from "../services/personService"

const styles = {
    btnReset: {
        backgroundColor: '#FFD700',
        color: '#4A4A4A',
        border: '2px solid #FFD700',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
}

const defaultDataDB = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": "1"
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": "2"
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": "3"
    },
    {
        "name": "Maraay Poppendieck",
        "number": "39-23-6423122",
        "id": "4"
    }
];

export const ButtonReset = ({ setPersons }) => {

    const handleReset = () => {
        personService.getAllPersons().then((persons) => {
            persons.forEach(person => {
                personService.deletePerson(person.id)
            });
            defaultDataDB.forEach((person => {
                personService.createPerson(person)
            }))
        })
        setPersons(defaultDataDB)
    }

    return (
        <div>
            <button style={styles.btnReset} onClick={ handleReset }>
                <b>RESET DATA BASE INFO</b>
            </button>
        </div>
    )
}