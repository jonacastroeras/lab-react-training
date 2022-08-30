function Random({ min, max }) {
    const randomValue = Math.floor(Math.random() * (max - min) + min);
    return (
        <>
            <div className="random">
                <h3>Random value between {min} and {max} => {randomValue}</h3>
            </div>
        </>
    )
}
export default Random