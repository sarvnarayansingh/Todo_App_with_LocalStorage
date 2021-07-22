import React,{useState,useEffect} from 'react'

import {Container} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {

  const [todos,setTodos]= useState([])

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }
  },[])

  const addTodo = async (todo) => {
    setTodos([...todos,todo])
  }

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const markComplete = (id) => {
    setTodos(todos.filter(data=> data.id !==id))
  }

  return (
    <Container>
      <Todos todos={todos} markComplete={markComplete}/>
      <TodoForm  addTodo={addTodo}/>
    </Container>
  );
}

export default App;
 