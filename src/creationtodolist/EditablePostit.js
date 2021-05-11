import { React } from "react";

export default function EditablePostit({ storage, setStorage }) {
  const edit = () => {
    setStorage([...storage, { statut: "default", title: "", text: "" }]);
  };
  return <div>save</div>;
}
