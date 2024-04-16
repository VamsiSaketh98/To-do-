
import { useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'                                                              

function App() {
  const [todos, setTodos] = useState([]);


  return (
    <div>
     <CreateTodo></CreateTodo>
     <Todos todos=([
      {
        title: "asd",
        description: "asad",
        completed: false
      }
     ])> </Todos> 
    </div>
  
  
  )
}

export default App
