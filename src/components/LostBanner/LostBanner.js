import React from 'react'
import Banner from '../Banner'

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner handleRestart={handleRestart} status="sad">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </Banner>
  )
}

export default LostBanner
