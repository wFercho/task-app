import {TaskCounter} from "../TaskCounter";
import {TaskSearch} from "../TaskSearch";
import {TasksList} from "../TasksList";
import {CreateTaskButton} from "../CreateTaskButton";
import { useTasks } from './useTasks'

import { Modal } from "../Modal";
import { TaskForm } from "../TaskForm";

import "./App.css";


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
  } = useTasks()

  return (
    <div className="AppUI-container">
      <TaskCounter
        completed={completed}
        inCompleted={inCompleted}
        totalTasks={totalTasks}
      />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <CreateTaskButton openModal={openModal} setOpenModal={setOpenModal} />
      <TasksList
        searchedTasks={searchedTasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        loading={loading}
        error={error}
      />
      {!!openModal && (
        <Modal>
          <TaskForm addTask={addTask} />
        </Modal>
      )}
    </div>
  );
}

export default App;
