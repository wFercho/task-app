import TaskItem from "../TaskItem/";
import "./TasksList.css";

function TasksList({ searchedTasks, completeTask, deleteTask, loading, error }) {
  return (
    <div className="TaskList-container">
      {error && <p className="TaskList-message">Error al cargar las tareas</p>}
      {loading && <p className="TaskList-message">Cargando las tareas...</p>}
      {!loading && !searchedTasks.length && (
        <p className="TaskList-message">No tienes tareas pendientes</p>
      )}
      <ul>
        {searchedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={() => completeTask(task.id, task.completed)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export {TasksList}