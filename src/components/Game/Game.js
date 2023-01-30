import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const guessesClone = [...guesses]
  const lastGuess = guessesClone.pop()
  const winner =
    lastGuess && lastGuess.every(({ status }) => status === 'correct')
  const loser = !winner && guesses.length === NUM_OF_GUESSES_ALLOWED

  const gameOver = winner || loser

  function handleSubmitGuess(tentativeGuess) {
    const guess = checkGuess(tentativeGuess, answer)
    setGuesses([...guesses, guess])
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameOver={gameOver} />
      {winner && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {loser && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  )
}

export default Game
