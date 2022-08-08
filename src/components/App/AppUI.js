import TaskCounter from "../TaskCounter";
import TaskSearch from "../TaskSearch";
import TasksList from "../TasksList";
import CreateTaskButton from "../CreateTaskButton";

import { Modal } from '../Modal'
import { useContext } from "react";
import { TasksContext } from "../TasksContext";
import { TaskForm } from "../TaskForm";

import './App.css'

function AppUI() {
  const {openModal} = useContext(TasksContext)

  return (
    <div className="AppUI-container">
      <TaskCounter />
      <TaskSearch />
      <CreateTaskButton />
      <TasksList />
      {!!openModal && 
      <Modal>
        <TaskForm/>
      </Modal>
      }
    </div>
  );
}

export { AppUI };
