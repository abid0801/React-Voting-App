import React,{useState} from 'react';
import AddCandidate from './AddCandidate';
import Header from './utilities/Header'
import './App.css';
import PeopleData from './data';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//     },
//   },
//   button: {
//     margin: theme.spacing(1),
//   }
// }))
// import ElectionForm from './components/ElectionForm/ElectionForm';




function App() {


  const [formData, setFormData]= React.useState({voterName:""})
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

//  var chairCounter=0;




  let chairData = PeopleData.filter(person => person.post ==="chair").map(filteredPerson => (
    filteredPerson
  ));
  console.log(chairData);

  let viceChairData =PeopleData.filter(person => person.post ==="viceChair").map(filteredPerson => (
    filteredPerson));
    console.log(viceChairData);

  let secretaryData =PeopleData.filter(person => person.post ==="secretary").map(filteredPerson => (
    filteredPerson));
    console.log(secretaryData);

    let treasurerData =PeopleData.filter(person => person.post ==="treasurer").map(filteredPerson => (
      filteredPerson));
      console.log(treasurerData);

  const add=(event)=>{

    return 1
  }

    
  const handleFromData =(event)=>{

    // const target = event.target
    // const name = target.name
    // const value = target.value
    
    // setFormData({...formData, [name]: value})
    setFormData(event.currentTarget.name.value)
    console.log(event.currentTarget.name.value)

  }



  return (
    <form onSubmit={add}>


    <div className = "App">
       
    <Header/>

       {/* <ElectionForm position={"chair"}  firstCandidate={chairData[0]} secondCandidate={chairData[1]}></ElectionForm>
      <ElectionForm position={"viceChair"}  firstCandidate={viceChairData[0]} secondCandidate={viceChairData[1]} thirdCandidate={viceChairData[2]}></ElectionForm>
      <ElectionForm position={"secretary"}  firstCandidate={secretaryData[0]} secondCandidate={secretaryData[1]} thirdCandidate={secretaryData[2]}></ElectionForm>
      <ElectionForm position={"treasurer"}  firstCandidate={treasurerData[0]} secondCandidate={treasurerData[1]} thirdCandidate={treasurerData[2]}></ElectionForm>  */}
      
       
        {/* {chairData.map(item=>
        {
          if (chairCounter===0)
          {
              <h1> Please Vote for {item.post}</h1>
          }
        <AddCandidate  name={item.name}></AddCandidate>
        chairCounter++;         
        }
           )
        
              } */}
        <h3>Vote for the position of Chair</h3>
        {chairData.map(item=><AddCandidate  name={item.name} changeHandler={handleFromData}></AddCandidate>)}

        <h3>Vote for the position of Vice Chair</h3>
        {viceChairData.map(item=><AddCandidate  name={item.name}></AddCandidate>)}

        <h3>Vote for the position of Secretary</h3>
        {secretaryData.map(item=><AddCandidate  name={item.name}></AddCandidate>)}

        <h3>Vote for the position of Treasurer</h3>
        {treasurerData.map(item=><AddCandidate  name={item.name}></AddCandidate>)}
          

    </div>
    <div class="container">
         <div class="center">
             <button onClick={add}>Submit vote</button>
         </div>
    </div>
    {/* <Button variant="contained" type="submit" color="primary" onClick={add}>Submit Vote</Button> */}
    </form>
  );
}

export default App;