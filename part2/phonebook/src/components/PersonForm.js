import React from 'react'

const PersonForm = ({
  handleSubmit,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  return (
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
  )
}

export default PersonForm
