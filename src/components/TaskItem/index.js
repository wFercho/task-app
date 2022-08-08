import { useState } from "react";
import "./TaskItem.css";

export default function TaskItem({ task, onComplete, onDelete }) {
  let { text, completed, date, hour } = task;
  const [isCompleted, setIsCompleted] = useState(completed);
  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
    onComplete();
  };
  return (
    <li className="TaskItem-container">
      <input
        type="checkbox"
        checked={isCompleted}
        className="TaskItem-completed"
        onChange={handleCheckboxChange}
      />
      <p className={`TaskItem-text ${isCompleted ? "TaskItem-check" : ""}`}>
        {text}
      </p>
      <div className="TaskItem-time">
        <span>{hour}</span>
        <span>{date}</span>
      </div>
      <button className="TaskItem-btnDelete" onClick={onDelete}>
        X
      </button>
    </li>
  );
}
