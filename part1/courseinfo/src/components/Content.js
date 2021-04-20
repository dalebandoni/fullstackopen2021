import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(p => (
        <Part name={p.name} exercises={p.exercises} key={p.name} />
      ))}
    </div>
  )
}

export default Content
