'use client'

import { ReactNode, createContext, useState } from 'react'

interface ActiveLoginFormContextProps {
  activeLoginForm: boolean
  toogleActiveLoginForm: () => void
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

  function toogleActiveLoginForm() {
    console.log('Passou')
  }

  return (
    <ActiveLoginFormContext.Provider
      value={{ activeLoginForm, toogleActiveLoginForm }}
    >
      {children}
    </ActiveLoginFormContext.Provider>
  )
}
