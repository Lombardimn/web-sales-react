import { AppRouter } from "@/AppRouter"
import { ModalProvider } from "@/components"

const AppHookContainer = () => {
  return (
    <ModalProvider>
        <AppRouter />
    </ModalProvider>
  )
}

export { AppHookContainer }