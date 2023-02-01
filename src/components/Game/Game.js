import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'
import Keyboard from '../Keyboard/Keyboard'
import { checkGuess } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  // running / won / lost
  const [gameStatus, setGameStatus] = React.useState('running')
  const [verifiedGuesses, setVerifiedGuesses] = React.useState([])
  console.log(verifiedGuesses)

  function handleSubmitGuess(tentativeGuess) {
    const verifiedGuess = checkGuess(tentativeGuess, answer)
    const nextGuesses = [...verifiedGuesses, verifiedGuess]

    if (tentativeGuess === answer) {
      setGameStatus('won')
    } else {
      if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
        setGameStatus('lost')
      }
    }

    setVerifiedGuesses(nextGuesses)
  }

  return (
    <>
      <GuessResults verifiedGuesses={verifiedGuesses}/>
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <Keyboard verifiedGuesses={verifiedGuesses}/>
      {gameStatus === 'won' && <WonBanner numOfGuesses={verifiedGuesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
