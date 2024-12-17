import React, { useState, useRef } from 'react'
import "./GameScreen.css"

const GameScreen = ({verifyLetter,pickedWord,pickedCategory,letters,guessedLetters,guessed,wrongLetters,score}) => {
  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter)
    setLetter("")
    letterInputRef.current.focus()
  }
  return (
    <div className='game'>
      <p className='points'><span>Pontuação: {score}</span></p>
      <h1>Advinhe a palavra</h1>
      <h3 className='tip'>Dica da palavra: <span>{pickedCategory}</span></h3>
      <p className='tryError'>Você ainda tem {guessed} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map( (letter, i)=> (
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef} required/>
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:
          {wrongLetters.map( (letter, i)=> (
            <span key={i}> {letter}, </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default GameScreen