import React from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"
function SearchBar({ filtering, setFiltering }) {
  return (
    <div className="database-search-bar">
      <input
        type="text"
        placeholder="search database"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      <FaMagnifyingGlass className="search-icon" />
    </div>
  )
}

export default SearchBar
