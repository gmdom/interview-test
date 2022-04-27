import { useEffect, useReducer } from 'react';
import './App.css';
import reducer from './reducer';

const initialState = [];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div className="App"></div>;
}

export default App;
