import { React } from "react";
import RemoveButton from "../RemoveButton";
import {
  BodyCustom,
  InputCustomTitle,
  InputCustomText,
  TaskCustom,
  TitleCustom,
  ChangeStatutButton,
} from "./styled";

export default function UrgentZone({ setStorage, storage }) {
  const ChangeTaskStatut = (task, index) => {
    task.statut = "default";
    setStorage([...storage]);

    console.log(task.statut);
  };

  return (
    <BodyCustom>
      <TitleCustom>Liste des task urgentes</TitleCustom>
      {storage.map((task, index) => {
        if (task.statut === "urgent") {
          return (
            <TaskCustom key={index}>
              <InputCustomTitle>{task.title}</InputCustomTitle>
              <InputCustomText>{task.text}</InputCustomText>
              <ChangeStatutButton
                onClick={() => {
                  ChangeTaskStatut(task, index);
                }}
              >
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
