import {React,useState} from 'react';
import {TaskCustom, InputCustom} from "./styled.js";

export default function TodoList() {

  const [todoTitle, setTodoTitle] = useState("");
  const [todoTask, setTodoTask] = useState("");
  const [storage, setStorage] = useState([]);
  

  const todoInput = (event,saveText) => {
    saveText(event.target.value)
  }

  const addButton = () => {
    setStorage([...storage,todoTitle,todoTask])
  }
  console.log(storage);
  return (
    <InputCustom>
    <input onChange={((event,saveText)=>{
      todoInput(event,setTodoTitle)
    })} >
    </input>
    <textarea onChange={((event,saveText)=>{
      todoInput(event,setTodoTask)
      })}>

    </textarea>
    <button onClick={addButton}>add</button>
    <div>
      {storage.map((taskItem,index) => {
      return(
        <TaskCustom key={index}>
    <li>{taskItem}</li>

        </TaskCustom>
      )

    })}
    </div>
    
    </InputCustom> 
  );
}

