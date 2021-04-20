import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
  const calcAll = () => {
    return good + bad + neutral
  }

  const calcAverage = () => {
    const gd = good * 1
    const bd = bad * -1
    const neut = neutral * 0
    const total = gd + bd + neut
    const avg = total / calcAll()

    return avg
  }

  const calcPositive = () => {
    const all = calcAll()
    const positive = (good / all) * 100
    return positive
  }

  if (good === 0 && neutral === 0 && bad === 0) {
    return <h3>No feedback given</h3>
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={calcAll()} />
          <Statistic text='average' value={calcAverage()} />
          <Statistic text='positive' value={calcPositive()} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
