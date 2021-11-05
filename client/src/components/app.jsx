import React, { useReducer } from 'react';
import SearchForm from './searchForm.jsx';
import Results from './results.jsx';
import './style/app.css';

const initialState = {
  searchStr: '',
  searchResults: [],
  convertKtoF: function(num) {
    if (isNaN(num)) {
      return '-'
    }
    return Math.round(((num - 273.15) * (9 / 5) + 32) * 10) / 10;
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateSearchStr':
      return { ...state, searchStr: action.data };
    case 'updateResults':
      return { ...state, searchResults: action.data };
    default:
      return state;
  }
}

export const GlobalContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="global">
      <GlobalContext.Provider value={{ state, dispatch }}>
        <div className="main-title">
          <h1>Would You Like to Know the Weather?</h1>
        </div>
        <SearchForm />
        <Results />
      </GlobalContext.Provider>
    </div>
  )
}

export default App;
