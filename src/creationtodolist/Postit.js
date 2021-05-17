import { React } from "react";
import EditablePostit from "../editablePostit/EditablePostit";
import {
  TaskCustom,
  ChangeStatutButton,
  ContainerChangeStatutButton,
  InputCreateTitle,
  InputCustom,
  InputCreateText,
  BodyCustom,
  AddButton,
  CustomTitle,
  CustomText,
  CreateTaskZone,
} from "./styled.js";
import RemoveButton from "../RemoveButton";

export default function TodoList({
  addButton,
  nonUrgentButton,
  urgentButton,
  todoInput,
  todoTitle,
  setTodoTitle,
  todoTask,
  setTodoTask,
  storage,
  setStorage,
  editTask,
  setEditTask,
  saveButton,
}) {
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
                {editTask === false ? (
                  <div onClick={() => setEditTask(true)}>
                    <CustomTitle>{taskItem.title}</CustomTitle>
                    <CustomText>{taskItem.text}</CustomText>
                  </div>
                ) : (
                  <div>
                    <input
                      placeholder="edit title"
                      onChange={(event, saveText) => {
                        todoInput(event, setTodoTitle);
                      }}
                    ></input>
                    <input
                      placeholder="edit task"
                      onChange={(event, saveText) => {
                        todoInput(event, setTodoTask);
                      }}
                    ></input>
                    <EditablePostit
                      saveButton={() => {
                        saveButton(setEditTask);
                      }}
                    />
                  </div>
                )}

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
    </BodyCustom>
  );
}
