import './App.css';
import { useState, useReducer } from 'react'


function reducer() {

}

function App() {
  const [name, setName] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  return (
    <div className="App">
      <h1>Zena's To-do List</h1>
      <form>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <button type="submit">Add To-do</button>
      </form>
    </div>
  );
}

export default App;
