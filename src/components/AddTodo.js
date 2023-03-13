import Modal from "./Modal"
import {useState} from 'react'
import '../styles/addTodo.css'


function AddTodo({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  /* function to add new task to firestore */

  return (
    <Modal modalLable='Add Todo' onClose={onClose} open={open}>
      <form className='addTodo' name='addTodo'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task decription'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddTodo
