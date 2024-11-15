import { ReactNode } from "react"
import { Navbar } from "@/components"

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        footer
      </footer>
    </>
  )
}

export { AppLayout }