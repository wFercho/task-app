import "./TaskSearch.css";

function TaskSearch({ searchValue, setSearchValue, loading }) {
  
  return (
    <div className="TaskSearch-container">
      <input
        placeholder="Buscar tarea"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
        disabled={loading}
      />
    </div>
  );
}

export {TaskSearch}