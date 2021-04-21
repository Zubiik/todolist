import {React,useState} from 'react';
import {TaskCustom, BodyCustom, InputCustomTitle, InputCustomText, Checkbox} from "./styled.js";

export default function TodoList() {

  const [todoTitle, setTodoTitle] = useState("");
  const [todoTask, setTodoTask] = useState("");
  const [storage, setStorage] = useState([]);


  const todoInput = (event,saveText) => {
    saveText(event.target.value)
  }

  const addButton = () => {
    setStorage([...storage,{title: todoTitle, text: todoTask}])

  }
  console.log(storage);
  return (
    <BodyCustom>
    <p>
      TODO LIST
    </p>
    <input placeholder="Title" onChange={((event,saveText)=>{
      todoInput(event,setTodoTitle)
    })} >
    </input>
    <textarea   placeholder="Task" onChange={((event,saveText)=>{
      todoInput(event,setTodoTask)
      })}>

    </textarea>
    <button onClick={addButton}>add</button>
    <div>
      {storage.map((taskItem,index) => {
      return(
        <TaskCustom key={index}>
          <div>
            <InputCustomTitle>{taskItem.title}</InputCustomTitle>
            <InputCustomText>{taskItem.text}</InputCustomText>
            <Checkbox type="checkbox"/>
          </div>
        </TaskCustom>
      )

    })}
    </div>
    
    </BodyCustom> 
  );
}
