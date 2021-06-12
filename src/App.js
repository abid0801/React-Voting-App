import React from 'react';
// import { addCandidate } from './components/addCandidate';

import Header from './utilities/Header'
import './App.css';
import PeopleData from './data';
import ElectionForm from './components/ElectionForm/ElectionForm';



function App() {

  // const [chair,setChair]= React.useState(0);
  // // const[viceChair,setViceChair]=React.useState([]);
  // // const[secretary,setSecretary]=React.useState([]);
  // // const[membershipch,setMembershipsch]=React.useState([]);
  // const id=0;

  // const chairHandler =id=>{
  //   let setValue=id.target.value;
  //   setChair(setValue);
  //   console.log(setValue);
  // }
  // const viceChairHandler =()=>{

  // }
  // const secretaryHandler =()=>{

  // }
  // const memberChcHandler =()=>{

  // }




  let chairData = PeopleData.filter(person => person.post ==="chair").map(filteredPerson => (
    filteredPerson.name
  ));
  console.log(chairData);

  let viceChairData =PeopleData.filter(person => person.post ==="viceChair").map(filteredPerson => (
    filteredPerson.name));
    console.log(viceChairData);

  let secretaryData =PeopleData.filter(person => person.post ==="secretary").map(filteredPerson => (
    filteredPerson.name));
    console.log(secretaryData);

    let treasurerData =PeopleData.filter(person => person.post ==="treasurer").map(filteredPerson => (
      filteredPerson.name));
      console.log(treasurerData);




  return (
    <div className = "App">
       
    <Header/>

      <ElectionForm position={"chair"}  firstCandidate={chairData[0]} secondCandidate={chairData[1]}></ElectionForm>
      <ElectionForm position={"viceChair"}  firstCandidate={viceChairData[0]} secondCandidate={viceChairData[1]} thirdCandidate={viceChairData[2]}></ElectionForm>
      <ElectionForm position={"secretary"}  firstCandidate={secretaryData[0]} secondCandidate={secretaryData[1]} thirdCandidate={secretaryData[2]}></ElectionForm>
      <ElectionForm position={"treasurer"}  firstCandidate={treasurerData[0]} secondCandidate={treasurerData[1]} thirdCandidate={treasurerData[2]}></ElectionForm>
      
      
    </div>
  );
}

export default App;