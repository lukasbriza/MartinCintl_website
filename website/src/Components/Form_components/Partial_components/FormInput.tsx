import { useState } from "react";

function FormInput(props:any){
    const [focused, setFocused] = useState(false)
    const { label, labelCounter, errorMessage, onChange, id, ...inputProps } = props

    function handleFocus(e:any){
        setFocused(true)
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PC STYLE//
    if(props.mobilestyle === false){
        if(inputProps.type === "textarea"){
            return(
                <div className="formInput" id={id} >
                    <label className="flag-contact" > 
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MOBILE STYLE//
    } else if(props.mobilestyle === true){
        if(inputProps.type === "textarea"){
            return(
                <div className="formInput-mobile" id={id} >
                    <label className="flag-contact-mobile" > 
                        <p className="flagText-mobile">{label}</p>
                    </label>
                    <textarea
                        {...inputProps}
                        onChange={onChange}
                        onBlur={handleFocus}
                        onFocus={inputProps.onFocus}
                        focused={focused.toString()}
                    >
                    </textarea>
                    <span className="errorMessage-mobile">{errorMessage}</span>
                </div>
            )
        } else {
            return(
                <div className="formInput-mobile" id={id}>
                    <label className="flag-contact-mobile"> 
                        <p className="flagText-mobile">{label}</p></label>
                    <input
                        {...inputProps}
                        onChange={onChange}
                        onFocus={inputProps.onFocus}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                    >
                    </input>
                    <span className="errorMessage-mobile">{errorMessage}</span>
                </div>
            )
        }
    } else {
        return(<></>)
    }
    
}

export {FormInput}