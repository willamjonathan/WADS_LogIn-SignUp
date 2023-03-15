import "../styles/title.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Dashboard from "./Dashboard";


function Title() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [todos, setTodo] = useState([]);

  /* function to get all tasks from firestore in realtime */
  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => { 
    const q = query(collection(db, "todos"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => { 
      setTodo(querySnapshot.docs.map(doc => ({ 
        id: doc.id, 
        data: doc.data() 
      }))) 
    }) 
  }) 
  


  return (
    <body>
    <div className="title">
      <header>Todo App</header>
      <div className="title__container">
        <div className="asset1"> Please click the "New Task+" button!</div>
        <br></br>
        <button onClick={() => setOpenAddModal(true)}>New Task +</button>
        <br></br>
        <div className="title">
          {/* <TodoList
            id={1}
            title="READ A BOOK"
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            completed={false}
          />
          <TodoList
            id={2}
            title="COMPLETE A REACT BUILD"
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            completed={false}
          /> */}

          {todos.map((todo) => ( 
	        <TodoList 
	          id={todo.id} 
	          key={todo.id} 
	          completed={todo.data.completed} 
	          title={todo.data.title} 
	          description={todo.data.description} 
	        /> 
          ))} 
          
            <Dashboard></Dashboard>
          
            
        </div>
      </div>

      {openAddModal && (
        <AddTodo onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
    </body>
  );
}

export default Title;
