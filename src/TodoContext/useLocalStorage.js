import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch(e) {
        setError(error);
      }
    }, 3000);
  });

  const saveItem = (newItem) => {
    try {
      const stringify = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringify);
      setItem(newItem);
    } catch(e) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading, 
    error
  }
}

export { useLocalStorage };