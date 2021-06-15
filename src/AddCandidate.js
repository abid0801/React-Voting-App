import React from "react";






const AddCandidate =(props) => {

  return(
  
  // props.object.map((candidate, )=> <div key={candidate.post}>

  //             <div>
  //               <form>

              // <input type="radio" id="{contact.id}" name="{contact.name}" value="{candidate.name}"></input>
              // <label for="{contact.name}">{candidate.name}</label><br></br>   
               
  //             </form>
  //             </div>
  //             </div>
  
  // )

  // props.object.filter(person => person.post ==="chair").map(filteredPerson => (

    <form>

    <h1>{props.position}</h1>
    <input type="radio" id="{props.id}" name="{props.name}" value="{props.name}" onChange={()=>props.changeHandler(props.name)}></input>
    <label for="{props.name}">{props.name}</label><br></br>   
  
    </form>
    
    
  

  
  );
    
};
export default AddCandidate;