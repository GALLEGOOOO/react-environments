const baseUrl = 'http://localhost:3001/persons';

const getAllPersons = () => {
    return fetch(baseUrl)
        .then((response) => response.json())
}

const createPerson = (newPerson) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id: newPerson.id ? newPerson.id.toString() : Date.now().toString(),
            name: newPerson.name,
            number: newPerson.number
        })
    })
        .then(response => response.json())
}

const updatePerson = ({ id, name, number }) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id: id,
            name: name,
            number: number
        })
    })
        .then(response => response.json())
}

const deletePerson = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
}

export default {
    getAllPersons,
    createPerson,
    updatePerson,
    deletePerson,
}