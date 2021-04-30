import { React } from "react";
import { RemoveButtonCustom } from "./creationtodolist/styled";

export default function RemoveButton({ storage, setStorage, index }) {
  const removeCallback = (index) => {
    const storageFiltered = storage.filter((task, selectedIndex) => {
      if (index === selectedIndex) {
        return false;
      }
      return task;
    });
    setStorage([...storageFiltered]);
  };

  return (
    <div>
      <RemoveButtonCustom
        onClick={() => {
          removeCallback(index);
        }}
      >
        x
      </RemoveButtonCustom>
    </div>
  );
}
