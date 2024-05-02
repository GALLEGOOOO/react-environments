import { Filter, Numbers, PersonForm } from "./components";
import { useFormFilter, usePersons, useForm } from "./hooks";

const App = () => {
  const { newName, newNumber, handleNewNameValue, handleNewNumberValue } =
    useForm();
  const { newFilter, handleNewFilterValue } = useFormFilter();
  const { persons, handleNewPersonsValue, loading, handleCounter, counter } = usePersons();

  return (
    <div>
      <h2>{import.meta.env.VITE_TITLE}</h2>
      <button onClick ={handleCounter}>{counter}</button>
      <Filter setNewFilter={handleNewFilterValue} />
      <PersonForm
        newName={newName}
        setNewName={handleNewNameValue}
        newNumber={newNumber}
        handleNewNumber={handleNewNumberValue}
        persons={persons}
        setPersons={handleNewPersonsValue}
      />
      <Numbers
        newFilter={newFilter}
        persons={persons}
        setPersons={handleNewPersonsValue}
        loading={loading}
      />
    </div>
  );
};

export default App;
