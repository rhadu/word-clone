import React from 'react'

function GuessInput() {
  const [guessValue, setGuessValue] = React.useState('')

  function guess(event) {
    event.preventDefault()
    if (guessValue.length < 5) {
      return
    }
    console.log({ guessValue })
    setGuessValue('')
  }
  return (
    <>
      <form onSubmit={guess} class="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          required={true}
          minLength={4}
          maxLength={5}
          value={guessValue}
          onChange={(event) => {
            const upperCaseGuess = event.target.value.toUpperCase()
            setGuessValue(upperCaseGuess)
          }}
        />
      </form>
    </>
  )
}

export default GuessInput
