import { React, useState } from "react";
import UrgentZone from "../statutChanges/UrgentZone";
import NonUrgentZone from "../statutChanges/NonUrgentZone";
import Postit from "./Postit";

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
    <div>
      <Postit
        addButton={addButton}
        nonUrgentButton={nonUrgentButton}
        urgentButton={urgentButton}
        todoInput={todoInput}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoTask={todoTask}
        setTodoTask={setTodoTask}
        storage={storage}
        setStorage={setStorage}
      />
      <UrgentZone storage={storage} setStorage={setStorage} />
      <NonUrgentZone storage={storage} setStorage={setStorage} />
    </div>
  );
}
