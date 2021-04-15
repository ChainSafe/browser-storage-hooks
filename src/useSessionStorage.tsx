import { useCallback, useEffect, useState } from "react"

const useSessionStorage = () => {
  const [canUseSessionStorage, setCanUseSessionStorage] = useState(false)
  const [isDoneTesting, setIsDoneTesting] = useState(false)

  useEffect(() => {
    try {
      sessionStorage.setItem("test", "test")
      sessionStorage.removeItem("test")
      setIsDoneTesting(true)
      setCanUseSessionStorage(true)
    } catch (e) {
      setIsDoneTesting(true)
      console.error("SessionStorage test failed")
    }
  }, [])

  const sessionStorageGet = useCallback(
    (key: string) => {
      if (!isDoneTesting) {
        return
      }

      if (!canUseSessionStorage) {
        console.error("Unable to use sessionStorage")
      }

      return sessionStorage.getItem(key)
    },
    [canUseSessionStorage, isDoneTesting]
  )

  const sessionStorageSet = useCallback(
    (key: string, value: string) => {
      if (!isDoneTesting) {
        return
      }

      if (!canUseSessionStorage) {
        console.error("Unable to use sessionStorage")
      }

      sessionStorage.setItem(key, value)
    },
    [canUseSessionStorage, isDoneTesting]
  )

  const sessionStorageRemove = useCallback(
    (key: string) => {
      if (!isDoneTesting) {
        return
      }

      if (!canUseSessionStorage) {
        console.error("Unable to use sessionStorage")
      }

      sessionStorage.removeItem(key)
    },
    [canUseSessionStorage, isDoneTesting]
  )

  return {
    canUseSessionStorage,
    sessionStorageRemove,
    sessionStorageGet,
    sessionStorageSet,
  }
}

export default useSessionStorage
