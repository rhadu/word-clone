import React from 'react'
import { range } from '../../utils'


function Cell({ letter = undefined, status = '' }) {
  return <span className={`cell ${status}`}>{letter}</span>
}

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) =>
        value ? (
          <Cell
            key={num}
            letter={value[num].letter}
            status={value[num].status}
          />
        ) : (
          <Cell key={num} />
        ),
      )}
    </p>
  )
}

export default Guess
