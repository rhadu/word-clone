import React from 'react'
import { KEYBOARD_KEYS } from '../../data'

function Keyboard({ verifiedGuesses }) {
  function checkLetter(letter) {
    let statusClass = ''
    for (const word of verifiedGuesses) {
      for (const item of word) {
        if (item.letter === letter) {
          statusClass = item.status
          if (statusClass === 'incorrect' || statusClass === 'correct') break
        }
      }
      if (statusClass === 'incorrect' || statusClass === 'correct') break
    }

    return statusClass
  }

  return (
    <div className="keyboard-wrapper">
      {KEYBOARD_KEYS.map((row, index) => (
        <p key={index} className="keyboard-row">
          {row.map((letter) => (
            <span
              key={letter.id}
              className={`letter ${checkLetter(letter.value)}`}
            >
              {letter.value}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}

export default Keyboard
