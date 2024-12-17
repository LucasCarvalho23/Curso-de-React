import React from 'react'
import "./EndScreen.css"

const EndScreen = ({retry, score}) => {
  return (
    <div className='end'>
      <h1>Game Over</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Jogar novamente</button>
      </div>
  )
}

export default EndScreen