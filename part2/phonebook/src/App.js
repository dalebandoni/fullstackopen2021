import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const filteredPeople = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLocaleLowerCase())
  )

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

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filter={filter} setFilter={setFilter} />
      <h3>add a new person</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons filteredPeople={filteredPeople} />
    </div>
  )
}

export default App
