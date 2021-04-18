import React from 'react'

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name}
      <br />
      {exercises}
    </p>
  )
}

export default Part
