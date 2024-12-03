import { EmptyMainForm, FormProductProps, MainFormProps } from "@/interfaces"
import { ReactNode, useState } from "react"
import { GlobalContext } from "@/context"

interface GlobalProps {
  children: ReactNode
}

const GlobalProvider = ({ children }: GlobalProps) => {
  const [value, setValue] = useState<MainFormProps>(EmptyMainForm)

  const addProduct = (product: FormProductProps) => {
    setValue((prev) => ({
      ...prev,
      formProducts: [...prev.formProducts, product],
    }))
  }

  const resetProductForm = () => {
    setValue((prev) => ({
      ...prev,
      formProducts: [...prev.formProducts],
    }))
  }

  return (
    <GlobalContext.Provider value={{ value, setValue, addProduct, resetProductForm }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalProvider }