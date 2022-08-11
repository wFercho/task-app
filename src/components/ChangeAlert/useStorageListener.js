import { useState } from "react";

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "Tasks_v1") {
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return {
    toggleShow,
    show: storageChange
  }
}

export { useStorageListener };
