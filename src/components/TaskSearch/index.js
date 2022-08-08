import { useContext } from "react";
import { TasksContext } from "../TasksContext";

import "./TaskSearch.css";

export default function TaskSearch() {
  const { searchValue, setSearchValue } = useContext(TasksContext);
  return (
    <div className="TaskSearch-container">
      <input
        placeholder="Buscar tarea"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
      />
      <button>Buscar</button>
    </div>
  );
}
