'use client'

import { ReactNode, createContext, useState } from 'react'

interface ActiveLoginFormContextProps {
  activeLoginForm: boolean
  setActiveLoginFormTrue: () => void
  setActiveLoginFormFalse: () => void
}

interface ActiveLoginFormProviderProps {
  children: ReactNode
}

export const ActiveLoginFormContext = createContext(
  {} as ActiveLoginFormContextProps,
)

export function ActiveLoginFormProvider({
  children,
}: ActiveLoginFormProviderProps) {
  const [activeLoginForm, setActiveLoginForm] = useState(false)

  function setActiveLoginFormTrue() {
    setActiveLoginForm(true)
  }

  function setActiveLoginFormFalse() {
    setActiveLoginForm(false)
  }

  return (
    <ActiveLoginFormContext.Provider
      value={{
        activeLoginForm,
        setActiveLoginFormTrue,
        setActiveLoginFormFalse,
      }}
    >
      {children}
    </ActiveLoginFormContext.Provider>
  )
}
