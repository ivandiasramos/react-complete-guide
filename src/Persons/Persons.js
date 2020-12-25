import React, { useState } from "react";
import Person from "./../Person/Person";

const Persons = (props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { key: 1, name: "Ivan", age: "30" },
      { key: 2, name: "Manu", age: "12" },
      { key: 3, name: "Helena", age: "5" },
    ],
  });

  const nameChangeHandler = (event, personIndex) => {
    const changePersonName = (person, event) => {
      return {
        ...person,
        name: event.target.value
      };
    }

    const personHandler = person => person.key === personIndex ? changePersonName(person, event) : person;

    const newPersons = [
      ...personsState.persons.map(personHandler)
    ];

    setPersonsState({ persons: newPersons });
  };

  return (
    <div>
      {
        personsState.persons.map(person => {
          return <Person
            age={person.age}
            name={person.name}
            change={(event) => nameChangeHandler(event, person.key)}
            key={person.key}
          />
        })
      }
    </div>
  );
})

export default Persons;
