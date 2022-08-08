import "./TaskSearch.css";

function TaskSearch({ searchValue, setSearchValue }) {
  
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

export {TaskSearch}