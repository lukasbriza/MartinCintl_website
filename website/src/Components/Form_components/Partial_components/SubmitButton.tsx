import React from "react"

function SubmitButton(props: { fn: (e: React.BaseSyntheticEvent) => void }) {
    return (
        <button className="submitButton relative centerh" onClick={(e) => { props.fn(e) }}>Odeslat</button>
    )
}

export { SubmitButton }