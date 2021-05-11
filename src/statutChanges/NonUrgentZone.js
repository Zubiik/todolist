import { React } from "react";
import {
  BodyCustom,
  TaskCustom,
  InputCustomTitle,
  InputCustomText,
  TitleCustom,
  ChangeStatutButton,
} from "./styled";
import RemoveButton from "../RemoveButton";

export default function NonUrgentZone({ setStorage, storage }) {
  const ChangeTaskStatut = (task, index) => {
    task.statut = "default";
    setStorage([...storage]);
  };

  return (
    <BodyCustom>
      <TitleCustom>Liste des task peu urgentes</TitleCustom>
      {storage.map((task, index) => {
        if (task.statut === "nonUrgent") {
          return (
            <TaskCustom key={index}>
              <InputCustomTitle>{task.title}</InputCustomTitle>
              <InputCustomText>{task.text}</InputCustomText>
              <ChangeStatutButton onClick={() => ChangeTaskStatut(task, index)}>
                Reset
              </ChangeStatutButton>
              <RemoveButton
                storage={storage}
                setStorage={setStorage}
                index={index}
              />
            </TaskCustom>
          );
        }
        return null;
      })}
    </BodyCustom>
  );
}
