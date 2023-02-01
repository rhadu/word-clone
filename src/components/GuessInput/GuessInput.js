import React from 'react'

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (tentativeGuess.length < 5) {
      window.alert('Must enter exactly and no more than 5 letters')
      return
    }

    handleSubmitGuess(tentativeGuess)
    setTentativeGuess('')
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={gameStatus !== 'running'}
          required
          minLength={5}
          maxLength={5}
          value={tentativeGuess}
          onChange={(event) => {
            const upperCaseGuess = event.target.value.toUpperCase()
            setTentativeGuess(upperCaseGuess)
          }}
          onKeyDown={(event) => console.log(event.code)}
        />
      </form>
    </>
  )
}

export default GuessInput
