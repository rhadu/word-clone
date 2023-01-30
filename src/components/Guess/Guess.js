import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers';

function Guess({ tentativeGuess }) {
  return (
    <>
      {range(0, 5).map((index) => (
        <span key={index} className="cell">
          {tentativeGuess ? tentativeGuess[index] : ''}
        </span>
      ))}
    </>
  )
}

export default Guess
