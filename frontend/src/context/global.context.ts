import { EmptyMainForm, FormProductProps, MainFormProps } from "@/interfaces"
import { createContext, Dispatch, SetStateAction, useContext } from "react"

interface GlobalContextType {
  value: MainFormProps
  setValue: Dispatch<SetStateAction<MainFormProps>>
  addProduct: (product: FormProductProps) => void
  resetProductForm: () => void
}

const GlobalContext = createContext<GlobalContextType>({
  value: EmptyMainForm,
  setValue: () => {},
  addProduct: () => {},
  resetProductForm: () => {}
})

const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (!context.value && context.value !== '') {
    throw new Error("GlobalContext must be used within a GlobalContextProvider")
  }

  return context
}

export { GlobalContext, useGlobalContext }