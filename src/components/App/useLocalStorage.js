import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

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
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    try {
      const stringNewItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringNewItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
