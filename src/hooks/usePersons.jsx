import { useEffect, useState } from "react";
import personService from "../services/personService";

export const usePersons = () => {
    const [persons, setPersons] = useState([]);

    const handleNewPersonsValue = (newValue) => {
        setPersons(newValue)
    }

    useEffect( () => {
        personService.getAllPersons()
            .then((data) => {
                handleNewPersonsValue(data)
            })
            .catch((error) => alert(`ERROR: ${error}`));
    }, [])

    return {
        persons,
        handleNewPersonsValue
    };
}

