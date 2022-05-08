import './App.css';
import { useState, useReducer } from 'react'

const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo',
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, action.payload]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => {
        if (todo.id === action.payload.id) {
          return false
        }
        return true
      })
    default:
      return todos
  }
}

function App() {
  const [name, setName] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name, id: Date.now(), complete: false } })
    setName('')
  }

  return (
    <div className="App">
      <h1>Zena's To-do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <button type="submit">Add To-do</button>
      </form>
      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            <p
              style={{ color: todo.complete ? '#AAA' : '#000' }}
            >
              {todo.name}
            </p>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
              Delete
            </button>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
              Complete
            </button>
          </div>

        ))}
      </div>
    </div>
  );
}

export default App;
