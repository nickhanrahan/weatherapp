import React, { useReducer } from 'react';
import SearchForm from './searchForm.jsx';

const initialState = {
  idk: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateIdk':
      return { ...state, idk: action.data };
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
      </GlobalContext.Provider>
    </div>
  )
}

export default App;
