import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles={
    input:{
    
        marginTop:'4px'
        
    },
}
 function TodoItem({todo, onChange}){
     const {remove} =useContext(Context)
 const classes=[]
 if(todo.completed){
     classes.push('done')
 }
	return(


    <li>
        <div className={classes.join('')}>
         <input style={styles.input} type='checkbox'
         checked={todo.completed}
         onChange={()=>onChange(todo.id)}/>
             {todo.title}
             </div>
             <button className="delete" onClick={() =>remove(todo.id)}>&times;</button>
    </li>
    )
}
TodoItem.propTypes ={
    todo: PropTypes.object.isRequired,     
    onChange:PropTypes.func.isRequired
}
export default TodoItem