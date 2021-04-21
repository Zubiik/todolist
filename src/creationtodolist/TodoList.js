import {React,useState} from 'react';
import {TaskCustom, BodyCustom, InputCustomTitle, InputCustomText, Checkbox} from "./styled.js";
import UrgentZone from '../dragandropArea/UrgentZone';

export default function TodoList({moovePostit}) {

  const [todoTitle, setTodoTitle] = useState("");
  const [todoTask, setTodoTask] = useState("");
  const [storage, setStorage] = useState([]);
  const [urgentStorage,setUrgentStorage] = useState([]);

  const todoInput = (event,saveText) => {
    saveText(event.target.value)
  }

  const addButton = () => {
    setStorage([...storage,{urgent:false,title: todoTitle, text: todoTask}])
  }
  const urgentButton = () => {
    setUrgentStorage([...storage, {urgent:true, title: todoTitle, text: todoTask}]);
  }
  
  return (
    <BodyCustom >
      
    <UrgentZone urgentStorage={urgentStorage}/>

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
            <button onClick={urgentButton}>Urgentclic</button>

          </div>
        </TaskCustom>
      )

    })}
    </div>
    
    </BodyCustom> 
  );
}
