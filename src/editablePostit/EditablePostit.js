import { React } from "react";
export default function EditablePostit({ storage, setStorage, saveButton }) {
  return (
    <div
      onClick={() => {
        saveButton();
      }}
    >
      save
    </div>
  );
}
