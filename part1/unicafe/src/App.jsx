import { useState } from 'react'

/* Feedback buttons */
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    
  )
}

const Statistics = (props) => {
  const {good, neutral, bad, total} = props

  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const total = good + neutral + bad

  const handleGood = () => setGood(prev => prev + 1)
  const handleNeutral = () => setNeutral(prev => prev + 1)
  const handleBad = () => setBad(prev => prev + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral'/>
      <Button onClick={handleBad} text='bad' />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App
