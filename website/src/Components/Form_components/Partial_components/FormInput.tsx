import { useEffect, useState, useRef } from "react";

function FormInput(props: { type: "name" | "textarea" | "email", callback: (text: string) => void, focused: boolean, onClick: any, correct: boolean, clear: boolean }) {
    const [errorClass, setErrorClass] = useState<string>("error")
    const [focusClass, setFocusClass] = useState<string>("inputActiveLine")
    let input: any = <></>;

    const ref: any = useRef()
    useEffect(() => {
        if (props.clear === true) {
            ref.current.value = ""
        }
    }, [props.clear])

    useEffect(() => {
        if (props.focused === true) {
            setFocusClass("inputActiveLine focusedClass")
        }
        if (props.focused === false) {
            setFocusClass("inputActiveLine")
        }
    }, [props.focused])
    useEffect(() => {
        if (props.correct === true) {
            setErrorClass("error")
        }
        if (props.correct === false) {
            setErrorClass("error errorActive")
        }
    }, [props.correct])

    let onChange = (text: any) => {
        props.callback(text.target.value);
    }

    if (props.type === "name") {
        input = (
            <div className="inputWrapper">
                <input type="text" placeholder="Jméno a příjmení" onChange={onChange} onClick={props.onClick} ref={ref} />
                <div className={focusClass}></div>
                <div className={errorClass}>Zadal/a jste nevalidní znak.</div>
            </div>
        )
    }
    if (props.type === "email") {
        input = (
            <div className="inputWrapper">
                <input type="text" placeholder="Email" onChange={onChange} onClick={props.onClick} ref={ref} />
                <div className={focusClass}></div>
                <div className={errorClass}>Zadal/a jste neplatný formát emailu.</div>
            </div>
        )
    }
    if (props.type === "textarea") {
        input = (
            <div className="inputWrapper">
                <textarea placeholder="Zpráva..." onChange={onChange} onClick={props.onClick} ref={ref} />
                <div className={focusClass}></div>
                <div className={errorClass}>Zadal/a jste nevalidní znak.</div>
            </div>
        )
    }
    return (input)
}

export { FormInput }