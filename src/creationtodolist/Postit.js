import { React } from "react";
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
import EditablePostit from "./EditablePostit.js";

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
                <div
                  onClick={() =>
                    editTask ? (
                      false
                    ) : (
                      <div>
                        <CustomTitle>{taskItem.title}</CustomTitle>
                        <CustomText>{taskItem.text}</CustomText>
                      </div>
                    )
                  }
                ></div>

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
