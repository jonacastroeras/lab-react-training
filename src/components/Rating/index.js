function Rating({ children }) {
    const number = Math.round(children)
    let stars = []
    for (let i = 1; i <= 5; i++) {
        const star = (i <= number) ? "★" : "☆"
        stars.push(star)
    }
    return (
        <>
            <h4>{stars}</h4>
        </>
    )
}
export default Rating;