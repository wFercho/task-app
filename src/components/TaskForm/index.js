import "./TaskForm.css";
import { useState } from "react";

function TaskForm({ addTask }) {
  const [textArea, setTextArea] = useState("");

  const handleAddClick = (e) => {
    e.preventDefault();
    if (textArea !== "") {
      addTask(textArea);
      setTextArea("");
    }
  };

  const handleTextAreaChange = (e) => {
    setTextArea(e.target.value);
  };
  return (
    <div className="TaskForm-container">
      <form>
        <textarea
          id="Modal-textArea"
          onChange={handleTextAreaChange}
          value={textArea}
          placeholder="Ingresa una tarea"
        />
        <button type="button" onClick={handleAddClick}>Agregar</button>
      </form>
    </div>
  );
}

export { TaskForm };
