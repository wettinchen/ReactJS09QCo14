import React from 'react'

const SearchItem = () => {
  return (
    <form className="searchForm" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
            id="search"
            type="text"
            role="searchbox"
            placeholder="Search Items"
        />
    </form>
  )
}

export default SearchItem