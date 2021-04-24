import React, { useEffect, useState } from 'react'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import SearchFilter from './components/SearchFilter'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await personService.getAll()
      setPersons(data)
    }
    fetchPersons()
  }, [])

  const filteredPeople = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLocaleLowerCase())
  )

  const handleSubmit = async e => {
    e.preventDefault()
    const newPersonObject = {
      name: newName,
      number: newNumber,
    }

    const existingName = persons.filter(
      person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
    )

    if (existingName[0] !== undefined) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = await personService.update(
          existingName[0].id,
          newPersonObject
        )
        setPersons(
          persons.map(person =>
            person.id !== existingName[0].id ? person : updatedPerson.data
          )
        )
        setNewName('')
        setNewNumber('')
        setMessage(`${newName} number was updated!`)

        setTimeout(() => {
          setMessage(null)
        }, 5000)
      } else {
        return
      }
      return
    }

    const newPerson = await personService.create(newPersonObject)

    setPersons(persons.concat(newPerson.data))
    setNewName('')
    setNewNumber('')

    setMessage(`${newName} added to the phonebook!`)

    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const handleDelete = async personToDelete => {
    try {
      const deletedPerson = await personService.deletePerson(personToDelete.id)
      setPersons(persons.filter(person => person.id !== personToDelete.id))
      return deletedPerson
    } catch (error) {
      setMessage(`Person ${personToDelete.name} already deleted from server.`)
    }
  }

  return (
    <div>
      {message && <Notification message={message} />}
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
      <Persons filteredPeople={filteredPeople} handleDelete={handleDelete} />
    </div>
  )
}

export default App
