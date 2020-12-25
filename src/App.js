import React, { useState } from "react";
import "./App.css";
import Persons from "./Persons/Persons";

const app = (props) => {
  const [showPersonsState, setShowPersonsState] = useState({
    showPersons: false,
  });

  let persons = null;
  let toggleButtonColor = 'toggle-button-inactive';

  if (showPersonsState.showPersons) {
    persons = <Persons />;
    toggleButtonColor = 'toggle-button-active';
  }

  const togglePersonsHandler = () => {
    setShowPersonsState({
      showPersons: !showPersonsState.showPersons,
    });
  };

  return (
    <div className="text-center">
      <h1>Hi, I'm react app</h1>
      <button
        className={toggleButtonColor}
        onClick={togglePersonsHandler}
      >
        Switch Name
      </button>
      {persons}
    </div>
  );
};

export default app;
