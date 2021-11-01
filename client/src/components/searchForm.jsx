import React from 'react';

const SearchForm = () => {
  return (
    <div className="search-form-ctr">
      <form className="search-form">
        <input className="search-input"></input>
        <button type="submit" className="search-submit">Search</button>
        <div className="selects-ctr">
          <div className="select-country-ctr">
            <label htmlFor="select-country">Select a Country:</label>
            <select name="select-country" id="select-country"></select>
          </div>
          <div className="select-state-ctr">
            <label htmlFor="select-state">Select a State:</label>
            <select name="select-state" id="select-state"></select>
          </div>
          <div className="select-city-ctr">
            <label htmlFor="select-city">Select a City:</label>
            <select name="select-city" id="select-city"></select>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchForm;