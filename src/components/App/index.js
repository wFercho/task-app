import { TaskCounter } from "../TaskCounter";
import { TaskSearch } from "../TaskSearch";
import { TasksList } from "../TasksList";
import { CreateTaskButton } from "../CreateTaskButton";
import { useTasks } from "./useTasks";
import { TasksError } from "../TasksError";
import { TasksLoading } from "../TasksLoading";
import { EmptyTasks } from "../EmptyTasks";
import { TaskItem } from "../TaskItem";

import { Modal } from "../Modal";
import { TaskForm } from "../TaskForm";

import "./App.css";
import { EmptySearchResults } from "../EmptySearchResults";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";

function App() {
  const {
    openModal,
    completed,
    inCompleted,
    totalTasks,
    searchValue,
    setSearchValue,
    setOpenModal,
    searchedTasks,
    completeTask,
    deleteTask,
    loading,
    error,
    addTask,
    sincronizeTasks
  } = useTasks();

  return (
    <div className="AppUI-container">
      <TaskCounter
        completed={completed}
        inCompleted={inCompleted}
        totalTasks={totalTasks}
        loading={loading}
      />
      <TaskSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      />
      <CreateTaskButton openModal={openModal} setOpenModal={setOpenModal} />
      <TasksList
        error={error}
        loading={loading}
        searchedTasks={searchedTasks}
        totalTasks={totalTasks}
        onError={() => <TasksError />}
        onLoading={() => <TasksLoading />}
        onEmptyTasks={() => <EmptyTasks />}
        onEmptySearchResults={() => <EmptySearchResults search={searchValue} />}
        render={(task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={() => completeTask(task.id, task.completed)}
            onDelete={() => deleteTask(task.id)}
          />
        )}
      />
      {/*Esto cuando queremos hacer uso de children como una render function*/}
      {/* {(task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={() => completeTask(task.id, task.completed)}
            onDelete={() => deleteTask(task.id)}
          />
        )}
        </TasksList> */}

      {!!openModal && (
        <Modal>
          <TaskForm addTask={addTask} />
        </Modal>
      )}
      <ChangeAlertWithStorageListener sincronize={sincronizeTasks}/>
    </div>
  );
}

export default App;
