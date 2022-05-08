import './App.css';
import { useState, useReducer } from 'react'

const ACTIONS = {
  ADD_TODO: 'add_todo'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, action.payload]
    default:
      return todos
  }
}

function App() {
  const [name, setName] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name, id: Date.now, complete: false } })
    setName('')
  }

  return (
    <div className="App">
      <h1>Zena's To-do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <button type="submit">Add To-do</button>
      </form>
    </div>
  );
}

export default App;
