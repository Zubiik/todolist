import {React,useState} from 'react';
import {TaskCustom, InputCreateTitle,InputCreateText, BodyCustom,AddButton, InputCustom, InputCustomTitle, InputCustomText, Checkbox,CreateTaskZone} from "./styled.js";
import UrgentZone from '../urgent/UrgentZone';
import NonUrgentZone from '../pasurgent/NonUrgentZone';

export default function TodoList({moovePostit}) {

  const [todoTitle, setTodoTitle] = useState("");
  const [todoTask, setTodoTask] = useState("");
  const [storage, setStorage] = useState([]);


  const todoInput = (event,saveText) => {
    saveText(event.target.value)
  }

  

  const urgentButton = (index) => {
    var storageCopy = storage;
    storageCopy[index].statut = "urgent";
    setStorage([...storageCopy]);
  }

  const addButton = () => {
    setStorage([...storage, {statut:"default", title: todoTitle, text: todoTask}])
  }
  return (
    <BodyCustom >
    <CreateTaskZone> 
      <InputCustom>
      <InputCreateTitle placeholder="Title" onChange={((event,saveText)=>{
      todoInput(event,setTodoTitle)
    })} >
    </InputCreateTitle>
    <InputCreateText   placeholder="Task" onChange={((event,saveText)=>{
      todoInput(event,setTodoTask)
      })}>
    </InputCreateText>
    <AddButton onClick={addButton}>ADD</AddButton>
    </InputCustom>
    
    <div>
      {storage.map((taskItem,index) => {
      return(
        <TaskCustom key={index}>
          <div>
            <InputCustomTitle>{taskItem.title}</InputCustomTitle>
            <InputCustomText>{taskItem.text}</InputCustomText>
            <Checkbox type="checkbox"/>
            <button onClick={() => {
              urgentButton(index)
            }}>Urgentclic</button>
          </div>

        </TaskCustom>
      )

    })}
    
    </div>
    </CreateTaskZone>
    <UrgentZone storage={storage}/>
    <NonUrgentZone/>
    </BodyCustom> 
  );
}
