import React, { useContext } from 'react';
import { GlobalContext } from './app.jsx';

const SearchForm = () => {
  const globalData = useContext(GlobalContext);

  const handleSearchChange = (event) => {
    globalData.dispatch({ type: 'updateSearchStr', data: event.target.value });
  }

  return (
    <div className="search-form-ctr">
      <form className="search-form">
        <input className="search-input" type="text" placeholder="Search cities..." value={globalData.searchStr} onChange={handleSearchChange}></input>
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