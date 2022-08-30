function BoxColor({ r, g, b }) {
    const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return (
        <>
            <div className="colorBox" style={{ backgroundColor: hex }}>
                <h4>rgb ({r}, {g}, {b}) <br />
                    {hex}</h4>
            </div>
        </>
    )
}
export default BoxColor