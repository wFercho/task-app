import { AppUI } from "./AppUI";
import { TasksProvider } from "../TasksContext";


function App() {
  return (
    <TasksProvider>
      <AppUI/>
    </TasksProvider>
  );
}

export default App;
