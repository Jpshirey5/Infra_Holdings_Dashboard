import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    // Perform your search logic here (replace with your actual search logic)
    // For example, you might have an array of names and filter based on the entered name
    const allNames = ['']; // Replace with your data
    const filteredResults = allNames.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));

    setSearchResults(filteredResults);
  };

  return (
    <form className="d-flex m-4 justify-content-center" onSubmit={handleSearch}>
      <input
        className="form-control me-2 w-25"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">Search</button>

      {/* Display search results */}
      <div className="mt-3">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </form>
  );
};

export default SearchComponent;
