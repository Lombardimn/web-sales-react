import { ReactNode, useState } from "react"
import { ModalContext } from "./modal.context"

const EmptyModalState: string | null = null

interface ModalProviderProps {
  children: ReactNode
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [state, setState] = useState<string | null>(EmptyModalState)

  return (
    <ModalContext.Provider value={{ state, setState }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalProvider }