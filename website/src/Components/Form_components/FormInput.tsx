import { useState, useRef } from "react";

function FormInput(props:any){
    const [focused, setFocused] = useState(false)
    const { label, labelCounter, errorMessage, onChange, id, ...inputProps } = props

    function handleFocus(e:any){
        setFocused(true)
    }

    if(inputProps.type === "textarea"){
        return(
            <div className="formInput" id={id}>
                <label className="flag-contact"> 
                    <p className="flagOrder">{labelCounter}</p>
                    <p className="flagText">{label}</p>
                </label>
                <textarea
                    {...inputProps}
                    onChange={onChange}
                    onBlur={handleFocus}
                    onFocus={inputProps.onFocus}
                    focused={focused.toString()}
                >
                </textarea>
                <span className="errorMessage">{errorMessage}</span>
            </div>
        )
    } else {
        return(
            <div className="formInput" id={id}>
                <label className="flag-contact"> 
                    <p className="flagOrder">{labelCounter}</p>
                    <p className="flagText">{label}</p></label>
                <input
                    {...inputProps}
                    onChange={onChange}
                    onFocus={inputProps.onFocus}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                >
                </input>
                <span className="errorMessage">{errorMessage}</span>
            </div>
        )
    }
}

export {FormInput}