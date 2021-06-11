import React from "react";

import "./App.css";

import {people} from "./data";


export const addVoter =(id) => {

  return(
  people.filter(person => person.id ===id).map(filteredPerson => (
    <li>
      {filteredPerson.name}
    </li>
  ))
  )
    
};