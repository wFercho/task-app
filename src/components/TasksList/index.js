import TaskItem from "../TaskItem/";
import "./TasksList.css";

function TasksList({
  render,
  children,
  onError,
  onLoading,
  onEmptyTasks,
  onEmptySearchResults,
  totalTasks,
  searchedTasks,
  loading,
  error,
}) {
  //Para renderizar dependiendo si es, render prop o render function (children)
  const renderFunc = render || children
  return (
    <section className="TaskList-container">
      {error && onError()}
      {loading  && onLoading()}
      {!loading && !totalTasks && onEmptyTasks()}
      {!!totalTasks && !searchedTasks.length && onEmptySearchResults()}

      <ul>{(!loading && !error) && searchedTasks.map(renderFunc)}</ul>
    </section>
  );
}

export { TasksList };
