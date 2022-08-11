import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
