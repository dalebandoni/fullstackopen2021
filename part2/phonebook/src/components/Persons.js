import React from 'react'

const Persons = ({filteredPeople}) => {
  return (
    <ul>
      {filteredPeople.map(person => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </ul>
  )
}

export default Persons
