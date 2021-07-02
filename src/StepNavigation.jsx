import React ,{useState} from 'react'
import Step from './Steps'


export default function StepNavigation(props) {
    return (
        <div className={"stepWrapper"}>
            {props.labelArray.map((item , index)=>
            <Step key={index} index={index} lable={item} selected={props.currentStep === index +1} updateStep={props.updateStep}></Step>)
            }
          
       </div>
    )
}
