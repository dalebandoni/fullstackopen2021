import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    const existingName = persons.filter(
      person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
    )

    if (existingName[0] !== undefined) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={handleSubmit}>
        <div>
          name:{' '}
          <input
            onChange={({ target }) => setNewName(target.value)}
            value={newName}
          />
        </div>
        <div>
          number{' '}
          <input
            onChange={({ target }) => setNewNumber(target.value)}
            value={newNumber}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default App
