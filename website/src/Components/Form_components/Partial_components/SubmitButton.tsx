function SubmitButton(props: any) {
    return (
        <button className="submitButton relative centerh" onClick={(e) => { props.fn(e) }}>Odeslat</button>
    )
}

export { SubmitButton }