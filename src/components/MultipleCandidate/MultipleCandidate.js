import React from 'react'
import AddCandidate from './src/AddCandidate';

export const MultipleCandidate = (props) => {

   
    return (
        <div>
            {props.object.map(name => 
                <div key={name.value}>

                 <AddCandidate/>


                </div>    
            
                    )}
        </div>
     
    )
}
