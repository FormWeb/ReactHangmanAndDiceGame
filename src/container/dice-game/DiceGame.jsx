import { useState } from "react"
import Dice from "../../component/dice/Dice"
import "./dice-game.css"

const DiceGame = function() {

    const [nb1, setNb1] = useState(parseInt(Math.random() * 7))
    const [nb2, setNb2] = useState(parseInt(Math.random() * 7))

    const [nbInput, seNbInput] = useState(6)

    const color = nb1 !== nb2 ? "blue" : "red"

    const handleClick = () => {
        setNb1(parseInt(Math.random() * (parseInt(nbInput)+1)))
        setNb2(parseInt(Math.random() * (parseInt(nbInput)+1)))
    }

    return (
        <>
            <button onClick={handleClick}>Roll !</button>

            <input type="number" value={nbInput} onChange={e => seNbInput(e.target.value)}></input>

            <div className="dice-box">
                <Dice number={nb1} color={color}></Dice>
                <Dice number={nb2} color={color}></Dice>
            </div>
            
            {
                color === "red" && (
                    <h4>C'est gagné !</h4>
                )
            }
            
        </>
    )
}

export default DiceGame