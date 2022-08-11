import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({sincronize}) {
  const {show, toggleShow} = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="ChangeAlert-container">
        <div className="ChangeAlert-info">
          <section>
          <p>Se han realizado cambios en otra pestaña o navegador</p>
          <p>¿Quieres sincronizarte con esos cambios?</p>
          </section>
          <button onClick={toggleShow}>Refrescar</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
