import { React, useState } from "react";
import {
  TaskCustom,
  ChangeStatutButton,
  ContainerChangeStatutButton,
  InputCreateTitle,
  InputCreateText,
  BodyCustom,
  AddButton,
  InputCustom,
  CustomTitle,
  CustomText,
  CreateTaskZone,
} from "./styled.js";
import UrgentZone from "../statutChanges/UrgentZone";
import NonUrgentZone from "../statutChanges/NonUrgentZone";
import RemoveButton from "../RemoveButton";

export default function TodoList() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoTask, setTodoTask] = useState("");
  const [storage, setStorage] = useState([]);

  const todoInput = (event, saveText) => {
    saveText(event.target.value);
  };

  const urgentButton = (index) => {
    var storageCopy = storage;
    storageCopy[index].statut = "urgent";
    setStorage([...storageCopy]);
  };

  const nonUrgentButton = (index) => {
    var storageCopy = storage;
    storageCopy[index].statut = "nonUrgent";
    setStorage([...storageCopy]);
  };

  const addButton = () => {
    setStorage([
      ...storage,
      { statut: "default", title: todoTitle, text: todoTask },
    ]);
    setTodoTitle("");
    setTodoTask("");
  };
  return (
    <BodyCustom>
      <CreateTaskZone>
        <div>TODO LIST</div>
        <InputCustom>
          <InputCreateTitle
            value={todoTitle}
            type="text"
            maxLength="25"
            placeholder="Title"
            onChange={(event, saveText) => {
              todoInput(event, setTodoTitle);
            }}
          ></InputCreateTitle>
          <InputCreateText
            value={todoTask}
            type="text"
            required
            maxLength="50"
            placeholder="Task"
            onChange={(event, saveText) => {
              todoInput(event, setTodoTask);
            }}
          ></InputCreateText>
          <AddButton onClick={addButton}>ADD</AddButton>
        </InputCustom>

        {storage.map((taskItem, index) => {
          if (taskItem.statut === "default") {
            return (
              <TaskCustom key={index}>
                <CustomTitle>{taskItem.title}</CustomTitle>
                <CustomText>{taskItem.text}</CustomText>
                <ContainerChangeStatutButton>
                  <ChangeStatutButton
                    onClick={() => {
                      urgentButton(index);
                    }}
                  >
                    Urgent
                  </ChangeStatutButton>

                  <ChangeStatutButton
                    onClick={() => {
                      nonUrgentButton(index);
                    }}
                  >
                    Non urgent
                  </ChangeStatutButton>

                  <RemoveButton
                    storage={storage}
                    setStorage={setStorage}
                    index={index}
                  />
                </ContainerChangeStatutButton>
              </TaskCustom>
            );
          }

          return null;
        })}
      </CreateTaskZone>
      <UrgentZone storage={storage} setStorage={setStorage} />
      <NonUrgentZone storage={storage} setStorage={setStorage} />
    </BodyCustom>
  );
}
