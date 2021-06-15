import React from 'react'

export default function ElectionForm(props) {
    return (
        <div className="App">

            <p>Please select your preferred candidate for {props.position} position</p>
        
            <div>                

                 {props.position==="chair" && <div>
                        <p></p>
                        <p>First Choice</p>
                         
                        <form>
                        <input type="radio" id="{props.chairFirstCandidate}" name="{props.name}" value="{props.firstCandidate}"></input>
                        <label for="{props.firstCandidate}">{props.firstCandidate}</label><br></br>   

                        <input type="radio" id="{props.ChairSecondCandidate}" name="{props.name}" value="{props.secondCandidate}"></input>
                        <label for="{props.secondCandidate}">{props.secondCandidate}</label><br></br>    
                        
                       </form>

                       <p>Second Choice</p>

                       <form>
                          
                        <input type="radio" id="{props.firstCandidate}" name="{props.name}" value="{props.firstCandidate}"></input>
                        <label for="{props.firstCandidate}">{props.firstCandidate}</label><br></br>  
                        <input type="radio" id="{props.secondCandidate}" name="{props.name}" value="{props.secondCandidate}"></input>
                        <label for="{props.secondCandidate}">{props.secondCandidate}</label><br></br>
                       </form>
                        </div>


                 }
                 {props.position==="viceChair" && <div>
                 <p></p>
                <p>First Choice</p>
                <form>            
                <input type="radio" id="{props.firstCandidate}" name="{props.name}" value="{props.firstCandidate}"></input>
                <label for="{props.firstCandidate}">{props.firstCandidate}</label><br></br> 
               
                <input type="radio" id="{props.secondCandidate}" name="{props.name}" value="{props.secondCandidate}"></input>
                <label for="{props.secondCandidate}">{props.secondCandidate}</label><br></br>    
                   
                <input type="radio" id="{props.thirdCandidate}" name="{props.name}" value="{props.thirdCandidate}"></input>
                <label for="{props.thirdCandidate}">{props.thirdCandidate}</label><br></br> 
                </form>
                 <p>Second Choice</p>
                 <form>            
                <input type="radio" id="{props.firstCandidate}" name="{props.name}" value="{props.firstCandidate}"></input>
                <label for="{props.firstCandidate}">{props.firstCandidate}</label><br></br> 
               
                <input type="radio" id="{props.secondCandidate}" name="{props.name}" value="{props.secondCandidate}"></input>
                <label for="{props.secondCandidate}">{props.secondCandidate}</label><br></br>    
                   
                <input type="radio" id="{props.thirdCandidate}" name="{props.name}" value="{props.thirdCandidate}"></input>
                <label for="{props.thirdCandidate}">{props.thirdCandidate}</label><br></br> 
                </form>
                <p>Third Choice</p>
                <form>            
                <input type="radio" id="{props.firstCandidate}" name="{props.name}" value="{props.firstCandidate}"></input>
                <label for="{props.firstCandidate}">{props.firstCandidate}</label><br></br> 
               
                <input type="radio" id="{props.secondCandidate}" name="{props.name}" value="{props.secondCandidate}"></input>
                <label for="{props.secondCandidate}">{props.secondCandidate}</label><br></br>    
                   
                <input type="radio" id="{props.thirdCandidate}" name="{props.name}" value="{props.thirdCandidate}"></input>
                <label for="{props.thirdCandidate}">{props.thirdCandidate}</label><br></br> 
                </form>
                </div>
                }


                 {props.position==="treasurer" && <div>
                 <p></p>
                <p>First Choice</p>
                <form>            
                <input type="radio" id="{props.firstCandidate}" name="{props.name}" value="{props.firstCandidate}"></input>
                <label for="{props.firstCandidate}">{props.firstCandidate}</label><br></br> 
               
                <input type="radio" id="{props.secondCandidate}" name="{props.name}" value="{props.secondCandidate}"></input>
                <label for="{props.secondCandidate}">{props.secondCandidate}</label><br></br>    
                   
                <input type="radio" id="{props.thirdCandidate}" name="{props.name}" value="{props.thirdCandidate}"></input>
                <label for="{props.thirdCandidate}">{props.thirdCandidate}</label><br></br> 
                </form>
                 <p>Second Choice</p>
                 <form>            
                <input type="radio" id="{props.firstCandidate}" name="{props.name}" value="{props.firstCandidate}"></input>
                <label for="{props.firstCandidate}">{props.firstCandidate}</label><br></br> 
               
                <input type="radio" id="{props.secondCandidate}" name="{props.name}" value="{props.secondCandidate}"></input>
                <label for="{props.secondCandidate}">{props.secondCandidate}</label><br></br>    
                   
                <input type="radio" id="{props.thirdCandidate}" name="{props.name}" value="{props.thirdCandidate}"></input>
                <label for="{props.thirdCandidate}">{props.thirdCandidate}</label><br></br> 
                </form>
                <p>Third Choice</p>
                <form>            
                <input type="radio" id="{props.firstCandidate}" name="{props.name}" value="{props.firstCandidate}"></input>
                <label for="{props.firstCandidate}">{props.firstCandidate}</label><br></br> 
               
                <input type="radio" id="{props.secondCandidate}" name="{props.name}" value="{props.secondCandidate}"></input>
                <label for="{props.secondCandidate}">{props.secondCandidate}</label><br></br>    
                   
                <input type="radio" id="{props.thirdCandidate}" name="{props.name}" value="{props.thirdCandidate}"></input>
                <label for="{props.thirdCandidate}">{props.thirdCandidate}</label><br></br> 
                </form>  
                </div>
                }

                {props.position==="secretary" && <div>
                 <p></p>
                <p>First Choice</p>
                <form>            
                <input type="radio" id="{props.firstCandidate}" name="{props.name}" value="{props.firstCandidate}"></input>
                <label for="{props.firstCandidate}">{props.firstCandidate}</label><br></br> 
               
                <input type="radio" id="{props.secondCandidate}" name="{props.name}" value="{props.secondCandidate}"></input>
                <label for="{props.secondCandidate}">{props.secondCandidate}</label><br></br>    
                   
                <input type="radio" id="{props.thirdCandidate}" name="{props.name}" value="{props.thirdCandidate}"></input>
                <label for="{props.thirdCandidate}">{props.thirdCandidate}</label><br></br> 
                </form>
                 <p>Second Choice</p>
                 <form>            
                <input type="radio" id="{props.firstCandidate}" name="{props.name}" value="{props.firstCandidate}"></input>
                <label for="{props.firstCandidate}">{props.firstCandidate}</label><br></br> 
               
                <input type="radio" id="{props.secondCandidate}" name="{props.name}" value="{props.secondCandidate}"></input>
                <label for="{props.secondCandidate}">{props.secondCandidate}</label><br></br>    
                   
                <input type="radio" id="{props.thirdCandidate}" name="{props.name}" value="{props.thirdCandidate}"></input>
                <label for="{props.thirdCandidate}">{props.thirdCandidate}</label><br></br> 
                </form>
                <p>Third Choice</p>

                <form>            
                <input type="radio" id="{props.firstCandidate}" name="{props.name}" value="{props.firstCandidate}"></input>
                <label for="{props.firstCandidate}">{props.firstCandidate}</label><br></br> 
               
                <input type="radio" id="{props.secondCandidate}" name="{props.name}" value="{props.secondCandidate}"></input>
                <label for="{props.secondCandidate}">{props.secondCandidate}</label><br></br>    
                   
                <input type="radio" id="{props.thirdCandidate}" name="{props.name}" value="{props.thirdCandidate}"></input>
                <label for="{props.thirdCandidate}">{props.thirdCandidate}</label><br></br> 
                </form>
                
                </div>
                }
            </div>
        </div>
    )
}