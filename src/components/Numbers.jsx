import { useEffect } from "react";
import { ButtonReset } from "./ButtonReset";
import { PersonLi } from "./PersonLi";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    gap: "50px",
  },
};

export const Numbers = ({ persons, newFilter, setPersons, loading }) => {
  useEffect(() => {
    console.log("Loading:", loading);
  }, [loading]);
  return (
    <div>
      <div style={styles.container}>
        <h2>Numbers </h2>
        <ButtonReset setPersons={setPersons} />
      </div>
      <ul>
        {loading ? (
          <li>Carregant llista ...</li>
        ) : (
          persons
            .filter((person) => person.name.includes(newFilter))
            .map((person, i) => (
              <div key={i}>
                <PersonLi
                  id={person.id}
                  name={person.name}
                  number={person.number}
                  setPersons={setPersons}
                />
              </div>
            ))
        )}
      </ul>
    </div>
  );
};
