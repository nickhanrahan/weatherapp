import React, { useContext } from 'react';
import { GlobalContext } from './app.jsx';
import axios from 'axios';
import './style/searchForm.css';

const SearchForm = () => {
  const globalData = useContext(GlobalContext);

  const handleSearchChange = (event) => {
    globalData.dispatch({ type: 'updateSearchStr', data: event.target.value });
  }

  const submitSearch = (event) => {
    event.preventDefault();
    axios.get(`/search?q=${globalData.state.searchStr}`)
      .then((res) => {
        globalData.dispatch({ type: 'updateResults', data: res.data })
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  }

  return (
    <div className="search-form-ctr">
      <form className="search-form" onSubmit={submitSearch}>
        <div className="search-input-ctr">
          <input className="search-input" type="text" placeholder="Search city, state, country..." value={globalData.searchStr} onChange={handleSearchChange}></input>
          <button type="submit" className="search-submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm;
