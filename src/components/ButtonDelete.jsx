import personService from "../services/personService"

const styles = {
    btnDelete: {
        backgroundColor: '#ffcccc',
        color: '#8b0000', 
        border: '2px solid #8b0000', 
        padding: '8px 16px', 
        borderRadius: '5px', 
        cursor: 'pointer',
    },
}

export const ButtonDelete = ({ personId, personName, setPersons }) => {

    const handleAlertDelete = () => {
        if (confirm(`Are you sure about deleting ${personName} ?`)) {
            personService.deletePerson(personId).then(data => {
                personService.getAllPersons().then(persons => {
                    setPersons(persons)
                })
            });
        }
    }

    return (
        <span>
            <button style={styles.btnDelete} onClick={ handleAlertDelete }>
                <b>DELETE</b>
            </button>
        </span>
    )
}