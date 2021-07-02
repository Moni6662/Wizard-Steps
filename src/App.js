import React, { useState } from "react";
//  import './App.css'
import StepNavigation from './StepNavigation'

function App() {
  const [currentStep, updateCurrentStep] = useState(1);
const labelArray=['Business',"Account Setting","Employess & Classes","Account Access","summary"]

function updateStep(step){
  updateCurrentStep(step);
}


  return (
    <div className="App">
     <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
     {/* <p style={{margin:"50px 0"}}> Selected Step : {currentStep}</p> */}
     <div style={{margin:"50px 0"}}>
     <button className='btn btn-light' onClick={()=>updateStep(currentStep-1)}>Back</button>
     <button className='btn btn-primary'onClick={()=>updateStep(currentStep+1)}>Next</button>
     </div>
    </div>
  );
}

export default App;
