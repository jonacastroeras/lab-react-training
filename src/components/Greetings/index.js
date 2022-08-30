function Greetings(props) {
    const greeting = (props.lang == "de") ? "Hallo" : "Greetings"

    return (
        <>
            <div className="greetings">
                <h3>{greeting} {props.children}</h3>
            </div>
        </>
    )
}

export default Greetings;