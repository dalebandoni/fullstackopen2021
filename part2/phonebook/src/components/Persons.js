import React from 'react'

const Persons = ({ filteredPeople, handleDelete }) => {
  return (
    <ul>
      {filteredPeople.map(person => (
        <p key={person.name}>
          {person.name} {person.number}{' '}
          <button onClick={() => handleDelete(person.id)}>delete</button>
        </p>
      ))}
    </ul>
  )
}

export default Persons
