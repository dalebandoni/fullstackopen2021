import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const newPerson = {
      name: newName,
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form>
        <div>
          name:{' '}
          <input
            onChange={({ target }) => setNewName(target.value)}
            value={newName}
          />
        </div>
        <div>
          <button type='submit' onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
