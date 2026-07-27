import { useState } from 'react'

/* Feedback buttons */
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleGood = () => setGood(prev => prev + 1)
  const handleNeutral = () => setNeutral(prev => prev + 1)
  const handleBad = () => setBad(prev => prev + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral'/>
      <Button onClick={handleBad} text='bad' />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
