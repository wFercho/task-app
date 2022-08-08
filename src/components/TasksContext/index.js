import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TasksContext = createContext();

function TasksProvider({ children }) {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("Tasks_v1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false)

  const completed = tasks.filter((task) => !!task.completed).length;
  const totalTasks = tasks.length;
  const inCompleted = totalTasks - completed;

  let searchedTasks = [];

  if (searchValue.length != 0) {
    searchedTasks = tasks.filter((task) => {
      const taskText = task.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return taskText.includes(searchText);
    });
  } else {
    searchedTasks = tasks;
  }

  const completeTask = (id, complateState) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = !complateState;
    saveTasks(newTasks);
  };

  const deleteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  const addTask = (text) => {
    const newTasks = [...tasks];
    let date = new Date()
    let hour = `${date.getHours()}:${date.getMinutes()}`
    let fecha = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    let task = {}
  
    task.id = date.toJSON()
    task.hour = hour
    task.date = fecha
    task.completed = false
    task.text = text
    newTasks.push(task)
    saveTasks(newTasks);
  };

  return (
    <TasksContext.Provider
      value={{
        completed,
        inCompleted,
        totalTasks,
        searchValue,
        setSearchValue,
        searchedTasks,
        completeTask,
        deleteTask,
        loading,
        error,
        openModal,
        setOpenModal,
        addTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksProvider };
