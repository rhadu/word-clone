import React from 'react'
import { range } from '../../utils'

function Cell({ letter = undefined, status = '' }) {
  return <span className={`cell ${status}`}>{letter}</span>
}

function Guess({ verifiedGuess }) {
  return (
    <p className="guess">
      {range(5).map((num) =>
        verifiedGuess ? (
          <Cell
            key={num}
            letter={verifiedGuess[num].letter}
            status={verifiedGuess[num].status}
          />
        ) : (
          <Cell key={num} />
        ),
      )}
    </p>
  )
}

export default Guess
