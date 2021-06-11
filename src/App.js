import React from 'react';
import { addVoter } from "./addVoter";

// const people = [
//   { 
//     id:1,
//     name: 'James',
//     age: 31,
//   },
//   { 
//     id:2,
//     name: 'John',
//     age: 45,
//   },
//   { 
//     id:3,
//     name: 'Paul',
//     age: 65,
//   },
//   { 
//     id:5,
//     name: 'Ringo',
//     age: 49,
//   },
//   {
//     id:6,
//     name: 'George',
//     age: 34,
//   }
// ];

function App() {

  // const addForm =(id) => {

  //   return(
  //   people.filter(person => person.id ===id).map(filteredPerson => (
  //     <li>
  //       {filteredPerson.name}
  //     </li>
  //   ))
  //   )
      
  // }

 
    

  

  return (
    <div>
      {addVoter(6)}
    </div>
  );
}

export default App;