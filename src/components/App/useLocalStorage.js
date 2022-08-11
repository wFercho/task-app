import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);
  const [sincronizedItem, setSincronizedItem] = useState(true)

  useEffect(() => {
    //Para simular tiempo de espera de una petición a una API
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true)

      } catch (error) {
        setError(error);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringNewItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringNewItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronize = () => {
    setLoading(true)
    setSincronizedItem(false)
  }

  return { item, saveItem, loading, error, sincronize };
}

export { useLocalStorage };