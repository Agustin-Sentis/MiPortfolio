import { useState } from 'react'

const readStored = <T extends string>(
  key: string,
  initial: T,
  isValid: (value: string) => value is T,
): T => {
  try {
    const stored = localStorage.getItem(key)
    return stored !== null && isValid(stored) ? stored : initial
  } catch {
    return initial
  }
}

const useLocalStorage = <T extends string>(
  key: string,
  initial: T,
  isValid: (value: string) => value is T,
): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(() => readStored(key, initial, isValid))

  const handleSet = (next: T) => {
    setValue(next)
    try {
      localStorage.setItem(key, next)
    } catch {
      // almacenamiento no disponible: se mantiene solo en memoria
    }
  }

  return [value, handleSet]
}

export default useLocalStorage
