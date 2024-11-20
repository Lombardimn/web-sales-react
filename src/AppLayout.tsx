import { ReactNode } from "react"
import { Footer, Navbar } from "@/components"

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export { AppLayout }