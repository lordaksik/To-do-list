import React from 'react'
import TodoItem from './todoitem'
import PropTypes from'prop-types'
 function TodoList(props){
	return(
    <ul className="menu">
		{props.todos.map((todo)=>{
            return <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} />
})}
	</ul>
    )
}
TodoList.propTypes ={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle:PropTypes.func.isRequired
}

export default TodoList