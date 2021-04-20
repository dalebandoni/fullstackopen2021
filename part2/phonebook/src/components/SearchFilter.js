import React from 'react'

const SearchFilter = ({ filter, setFilter }) => {
  return (
    <div>
      filter shown with
      <input
        type='text'
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      />
    </div>
  )
}

export default SearchFilter
