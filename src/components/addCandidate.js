import React from "react";

import {people} from '../data';
import ElectionForm from "./ElectionForm/ElectionForm";


export const addCandidate =(id) => {

  return(
  people.filter(person => person.post ==="chair").map(filteredPerson => (
    <ElectionForm position={"chair"}  firstCandidate={filteredPerson[0].name} secondCandidate={filteredPerson[1].name} thirdCandidate={""}></ElectionForm>
  ))
  )
    
};
export default addCandidate;