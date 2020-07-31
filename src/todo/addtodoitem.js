import React, {useState} from 'react'
import PropTypes from'prop-types'


function useInputvalue(defaultvalue=''){
const[value, setValue] =useState(defaultvalue)
return{
    bind:{
    value,
    onChange:  event => setValue(event.target.value)
    },
    claer:()=>setValue(''),
    value:()=>value
}

}
function AddToDoItem({onCreate}){
    const input=useInputvalue('')
    
    function submitHandler(event){
        event.preventDefault()
        if(input.value().trim()){
            onCreate(input.value())
        input.claer()           
        }
    }

    return(
    <div className="d7">
    <form onSubmit={submitHandler}>
  <input type="text" {...input.bind} placeholder="Добавить..."></input>
  <button type="submit"></button>
  </form>
</div>
    )
}

AddToDoItem.propTypes={
    onCreate: PropTypes.func.isRequired
}
export default AddToDoItem