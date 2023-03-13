import Modal from "./Modal"
import '..styles/todo.css'

function Todo({onClose, open, title, description}) {

  return (
    <Modal modalLable='Todo Item' onClose={onClose} open={open}>
      <div className='todoItem'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Modal>
  )
}

export default Todo
