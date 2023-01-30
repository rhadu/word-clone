import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Cell({ letter = undefined, status='' }) {
  return <span className={`cell ${status}`}>{letter}</span>
}

function Guess({ value, answer }) {
  const checkedGuess = checkGuess(value, answer)
  console.log(checkedGuess)
  return (
    <p className="guess">
      {range(5).map((num) =>
        checkedGuess ? (
          <Cell
            key={num}
            letter={checkedGuess[num].letter}
            status={checkedGuess[num].status}
          />
        ) : (
          <Cell key={num}/>
        ),
      )}
    </p>
  )
}

export default Guess
