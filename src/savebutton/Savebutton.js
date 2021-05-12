import { React } from "react";

export default function Savebutton({ editTask }) {
  return (
    <div>
      <button onClick={editTask}>save</button>
    </div>
  );
}
