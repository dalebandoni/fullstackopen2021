import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const getPersons = async () => {
      const { data } = await axios.get('http://localhost:3001/persons')
      setPersons(data)
    }
    getPersons()
  }, [])

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
