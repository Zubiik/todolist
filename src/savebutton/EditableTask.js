import { React } from "react";

export default function EditableTask({ taskItem, storage, setStorage }) {
  const SaveButton = () => {

  }
  return (
    <div>
      <input>{taskItem.title}</input>;
    </div>
  );
}
