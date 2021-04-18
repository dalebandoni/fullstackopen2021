import React from 'react'

const Total = ({ exercises }) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const exercisesArr = exercises.map(p => p.exercises)
  const totalExercises = exercisesArr.reduce(reducer)
  return <div>{totalExercises}</div>
}

export default Total
