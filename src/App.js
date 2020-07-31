import React from 'react';
import TodoList from './todo/todolist'
import AddToDoItem from './todo/addtodoitem'
import Context from './context'



function App() {
  const [todos, setTodos]=React.useState([
    {id:1,completed:false, title:'купить хлеб'},
    {id:2,completed:false, title:'купить ролтик'},
    {id:3,completed:false, title:'купить машину'}
   ])
   
    function toggleTodo(id){
      setTodos (
        todos.map(todo =>{
        if(todo.id === id){
          todo.completed=! todo.completed
        }
        return  todo
      })
      )
    }
    function AddToDo(title){
      setTodos(todos.concat([{
        title,
        id:Date.now(),
        completed:false
      }]))
    }
    function remove(id){
      setTodos(todos.filter(todo=> todo.id !==id))
    }
  return (
    <Context.Provider value={{remove}}>
    <div className="main">
		<p className="title_prog">To do list</p>
		<AddToDoItem onCreate={AddToDo}/>
	<TodoList todos={todos} onToggle={toggleTodo}/>
  </div>
  </Context.Provider>
  )
}

export default App;
