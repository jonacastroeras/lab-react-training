import visa from "../../assets/images/visa.png"
import masterCard from "../../assets/images/visa.png"
function CreditCard({
    type
    , number
    , expirationMonth
    , expirationYear
    , bank
    , owner
    , bgColor
    , color
}) {
    const formattedNumber = "•••• •••• •••• " + number.substring(12, 16);
    const image = (type === "Visa") ? visa : masterCard
    return (
        <>
            <div className="creditCard" style={{ backgroundColor: bgColor, color: color }}>
                <div>
                    <img src={image} width="50px" />
                </div>
                <h3>{formattedNumber}</h3>
                <p>Expires {expirationMonth}/{expirationYear} {bank} <br /> {owner}</p>
            </div>
        </>
    )
}
export default CreditCard;