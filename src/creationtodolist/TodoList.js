import {React,useState} from 'react';
import {TaskCustom,RemoveButton, ChangeStatutButton,ContainerChangeStatutButton, InputCreateTitle,InputCreateText, BodyCustom,AddButton, InputCustom, InputCustomTitle, InputCustomText, Checkbox,CreateTaskZone} from "./styled.js";
import UrgentZone from '../statutChanges/UrgentZone';
import NonUrgentZone from '../statutChanges/NonUrgentZone';

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
const supprButton = (selectedItemIndex) => {
  storage.pop(selectedItemIndex)
  setStorage([...storage]);
    }

  const nonUrgentButton = (index) => {
    var storageCopy = storage;
    storageCopy[index].statut = "nonUrgent";
    setStorage([...storageCopy]);
  }

  const addButton = () => {
    setStorage([...storage, {statut:"default", title: todoTitle, text: todoTask}]);
    setTodoTitle("");
    setTodoTask("");
  }
  return (
    <BodyCustom >
    <CreateTaskZone> 
      <InputCustom>
      <InputCreateTitle value={todoTitle} type="text" maxLength="25" placeholder="Title" onChange={((event,saveText)=>{
      todoInput(event,setTodoTitle);
    })} >
    </InputCreateTitle>
    <InputCreateText value={todoTask} type="text" required maxLength="50" placeholder="Task" onChange={((event,saveText)=>{
      todoInput(event,setTodoTask)
      })}>
    </InputCreateText>
    <AddButton onClick={addButton}>ADD</AddButton>
    </InputCustom>
    
    
      {storage.map((taskItem,index) => {

        if (taskItem.statut === "default") {
          return(
        <TaskCustom key={index}>
            <InputCustomTitle >{taskItem.title}</InputCustomTitle>
            <InputCustomText >{taskItem.text}</InputCustomText>
            <ContainerChangeStatutButton>
            <ChangeStatutButton onClick={() => {
              urgentButton(index)
            }}>Urgent </ChangeStatutButton>
            <ChangeStatutButton onClick={() => {
              nonUrgentButton(index)
            }}
            >Non urgent</ChangeStatutButton>
            <RemoveButton onClick={() => {
              supprButton(index)
            }}
            >x</RemoveButton>
            </ContainerChangeStatutButton>
        </TaskCustom>
      )
        }
        
        return null;
        
    })}
    </CreateTaskZone>
    <UrgentZone storage={storage}/>
    <NonUrgentZone storage={storage}/>
    </BodyCustom> 
  );
}
