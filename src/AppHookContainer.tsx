import { AppRouter } from "@/AppRouter"
import { ModalProvider } from "@/components"
import { GlobalProvider } from "@/context"

const AppHookContainer = () => {
  return (
    <GlobalProvider>
      <ModalProvider>
          <AppRouter />
      </ModalProvider>
    </GlobalProvider>
  )
}

export { AppHookContainer }