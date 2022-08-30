function IdCard(element) {
    return (
        <>
            <div className="card">
                <div>
                    <img src={element.picture} />
                </div>
                <div>
                    <p>
                        <strong>First Name:</strong> {element.firstName}<br />
                        <strong>Last Name:</strong> {element.lastName}<br />
                        <strong>Gender:</strong> {element.gender}<br />
                        <strong>Height:</strong> {element.height}<br />
                        <strong>Birth:</strong> {element.birth}
                    </p>
                </div>
            </div>
        </>
    )
}
export default IdCard;