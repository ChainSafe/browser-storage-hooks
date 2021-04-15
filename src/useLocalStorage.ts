import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = () => {
  const [canUseLocalStorage, setCanUseLocalStorage] = useState(false);
  const [isDoneTesting, setIsDoneTesting] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      setCanUseLocalStorage(true);
    } catch (e) {
      console.error('LocalStorage test failed.');
    }

    setIsDoneTesting(true);
  }, []);

  const localStorageGet = useCallback(
    (key: string) => {
      if (!isDoneTesting) {
        return;
      }

      if (!canUseLocalStorage) {
        console.error('Unable to use localStorage');
      }

      return localStorage.getItem(key);
    },
    [canUseLocalStorage, isDoneTesting]
  );

  const localStorageSet = useCallback(
    (key: string, value: string) => {
      if (!isDoneTesting) {
        return;
      }

      if (!canUseLocalStorage) {
        console.error('Unable to use localStorage');
      }

      localStorage.setItem(key, value);
    },
    [canUseLocalStorage, isDoneTesting]
  );

  const localStorageRemove = useCallback(
    (key: string) => {
      if (!isDoneTesting) {
        return;
      }

      if (!canUseLocalStorage) {
        console.error('Unable to use localStorage');
      }

      localStorage.removeItem(key);
    },
    [canUseLocalStorage, isDoneTesting]
  );

  return {
    canUseLocalStorage,
    localStorageRemove,
    localStorageGet,
    localStorageSet,
  };
};

export default useLocalStorage;
