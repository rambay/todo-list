import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                let localStorageItem = localStorage.getItem(itemName);
                let parseItem;

                if (!localStorageItem) {
                    const value = JSON.stringify(initialValue);
                    localStorage.setItem(itemName, value);
                } else {
                    parseItem = JSON.parse(localStorageItem);
                    setItem(parseItem);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {
        item, loading, error, saveItem
    };
}

export { useLocalStorage };