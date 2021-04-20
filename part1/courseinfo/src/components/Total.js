import React from 'react'

const Total = ({ exercises }) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const exercisesArr = exercises.map(p => p.exercises)
  const totalExercises = exercisesArr.reduce(reducer)
  return <div>total of {totalExercises} exercises</div>
}

export default Total
