import React, { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }
  const addNeutral = () => {
    setNeutral(neutral + 1)
  }
  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button label='good' handleClick={addGood} />
      <Button label='neutral' handleClick={addNeutral} />
      <Button label='bad' handleClick={addBad} />
      <Statistics
        good={good}
        setGood={setGood}
        bad={bad}
        setBad={setBad}
        setNeutral={setNeutral}
        neutral={neutral}
      />
    </div>
  )
}

export default App
