import { useEffect } from "react"
import { useState } from "react"
import words from "../../data/words.json"
import "./hangman.css"

const HangmanGame = (props) => {

    const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)])
    const [hiddenWord, setHiddenWord] = useState("")

    const [letterInput, setLetterInput] = useState("")
    const [guessInput, setGuessInput] = useState("")

    const [tries, setTries] = useState(6)

    const generateHiddenWord = (newWord) => {
        
        let newHiddenWord = ""
        for (const letter of newWord) {
            newHiddenWord += "*"
        }
        setHiddenWord(newHiddenWord)
    }

    const handleLetterChange = (e) => {
        e.target.value ? setLetterInput(e.target.value[0]) : setLetterInput("")
    }

    const handleTest = () => {
        const letterTested = letterInput.toUpperCase()
        if (word.includes(letterTested)) {
            let newHiddenWord = ""
            for (let i = 0; i < word.length; i++) {
                if (word[i] === letterTested) {
                    newHiddenWord += letterTested
                }
                else {
                    newHiddenWord += hiddenWord[i]
                }
            }
            setHiddenWord(newHiddenWord)
            setLetterInput("")
        }
        else {
            setTries(t => t - 1)
            setLetterInput("")
        }
    }

    const handleTry = () => {
        if (guessInput.toUpperCase() === word) {
            setHiddenWord(word)
        }
        setGuessInput("")
    }

    const handleRestart = () => {
        const newWord = words[Math.floor(Math.random() * words.length)]
        setWord(newWord)
        setTries(6)
        generateHiddenWord(newWord)
    }

    useEffect(() => {

        if (word) {
            let newHiddenWord = ""
            for (const letter of word) {
                newHiddenWord += "*"
            }
            setHiddenWord(newHiddenWord)
        }

    }, [word])

    return (
        <div className="hangman-container">
            {tries > 0 && word !== hiddenWord ? (
                <div>
                    <h4>Il vous reste {tries} essais</h4>
                    <input value={letterInput} onChange={handleLetterChange} placeholder="Letter to test" onKeyUp={e => {
                            if (e.key === "Enter") {
                                handleTest()
                            }
                        }}></input>
                    <button onClick={handleTest}>Test</button>
                    <input value={guessInput} onChange={e => setGuessInput(e.target.value)} placeholder="Word to test"
                        onKeyUp={e => {
                            if (e.key === "Enter") {
                                handleTry()
                            }
                        }}></input>
                    <button onClick={handleTry}>Try !</button>
                    {hiddenWord}
                </div>
            ) : 
            tries === 0 ? (
                <div>
                    <h4>Perdu ! Le mot était {word}</h4>
                    <button onClick={handleRestart}>Restart</button>
                </div>
            ) : (
                <div>
                    <h4>Gagné !</h4>
                    <button onClick={handleRestart}>Restart</button>
                </div>
            )}
            
        </div>
    )
}

export default HangmanGame