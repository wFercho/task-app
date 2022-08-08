import { useContext, useState } from "react";
import { TasksContext } from "../TasksContext";
import "./TaskForm.css";

function TaskForm() {
  const { addTask } = useContext(TasksContext);
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
