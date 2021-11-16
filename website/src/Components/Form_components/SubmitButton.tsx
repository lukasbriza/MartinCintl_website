function SubmitButton(props:submitBtn){
    return(
        <button className="submitButton relative centerh" onClick={()=>{props.fn()}}>Odeslat</button>
    )
}

export {SubmitButton}