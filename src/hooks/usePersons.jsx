import { useEffect, useState } from "react";
import personService from "../services/personService";

export const usePersons = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  const handleNewPersonsValue = (newValue) => {
    setPersons(newValue);
  };

  const handleCounter = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  useEffect(() => {
    personService
      .getAllPersons()
      .then((data) => {
        handleNewPersonsValue(data);
      })
      .catch((error) => alert(`ERROR: ${error}`))
      .finally(() => setLoading(false));
  }, [counter]);

  return {
    persons,
    handleNewPersonsValue,
    loading,
    counter,
    handleCounter,
  };
};
