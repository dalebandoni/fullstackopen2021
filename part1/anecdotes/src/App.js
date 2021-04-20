import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ]

  const [selected, setSelected] = useState(0)
  const [anecdotesRating, setAnecdotesRating] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(
      Number.prototype.valueOf,
      0
    )
  )

  const maxRating = anecdotesRating.indexOf(Math.max(...anecdotesRating))

  const randomNum = Math.floor(Math.random() * anecdotes.length)

  const getRandomAnecdote = () => {
    console.log(randomNum)
    setSelected(randomNum)
  }

  const addVote = () => {
    setAnecdotesRating([
      ...anecdotesRating.slice(0, selected),
      anecdotesRating[selected] + 1,
      ...anecdotesRating.slice(selected + 1),
    ])
  }
  return (
    <div>
      {anecdotes[selected]} <br />
      has {anecdotesRating[selected]} votes
      <br />
      <button onClick={() => addVote()}>vote</button>
      <button onClick={() => getRandomAnecdote()}>next anecdote</button>
      {anecdotesRating && (
        <div>
          <h2>Anecdote with most votes</h2>
          <p>{anecdotes[maxRating]}</p>
          <p>has {anecdotesRating[selected]} votes</p>
        </div>
      )}
    </div>
  )
}

export default App
