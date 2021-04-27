import {React,useState} from 'react';
import {TaskCustom,ChangeStatutButton,ContainerChangeStatutButton, InputCreateTitle,InputCreateText, BodyCustom,AddButton, InputCustom, InputCustomTitle, InputCustomText, Checkbox,CreateTaskZone} from "./styled.js";
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
const supprButton = (index) => {
    
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

  console.log(todoTitle);
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

            <ChangeStatutButton onClick={() => {
              supprButton(index)
            }}
            >x</ChangeStatutButton>
            </ContainerChangeStatutButton>
          

        </TaskCustom>
      )

    })}
    </CreateTaskZone>
    <UrgentZone storage={storage}/>
    <NonUrgentZone storage={storage}/>
    </BodyCustom> 
  );
}
