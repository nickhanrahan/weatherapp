import React, { useReducer } from 'react';
import SearchForm from './searchForm.jsx';
import Results from './results.jsx';

const initialState = {
  searchStr: '',
  searchResults: [],
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
        <h1>Would You Like to Know the Weather?</h1>
        <SearchForm />
        <Results />
      </GlobalContext.Provider>
    </div>
  )
}

export default App;
