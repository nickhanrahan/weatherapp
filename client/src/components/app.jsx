import React, { useReducer } from 'react';

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
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="global">
      <GlobalContext.Provider value={{ state, dispatch }}>
        App
      </GlobalContext.Provider>
    </div>
  )
}

export default App;
