
export default function Steps(props) {
    return (
        <div className={"stepBlock " + (props.selected ? "selected":"")}>
            <div className={"circleWrapper"} onClick={()=>props.updateStep(props.index+1)}>
                <div className="circle"><span className={"index" +(props.selected ?"righttick":"index")}>{props.index + 1}</span> </div>
               
            </div>
            <span>{props.lable}</span>
        </div>
    )
}
