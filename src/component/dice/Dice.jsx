import "./dice.css"

const Dice = function(props) {

    const { number, color } = props
    const diceClass = "dice " + (color === "red" ? "red" : "blue")

    return(
        <>
            <div className={diceClass}><p>{number}</p></div>
        </>
    )
}

export default Dice