import { MouseEvent, ReactNode, useEffect, useRef } from "react"
import { Button, Icon, useModalContext } from "@/components"
import { createPortal } from "react-dom"

interface ModalComponentProps {
  title: string
  id: string
  className?: string
  children: ReactNode
}

const eventListener = 'keydown'

const Modal = ({ title, id, className, children }: ModalComponentProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const modalRoot = document.getElementById('modal') as HTMLDivElement
  const { state, setState } = useModalContext()

  const closeModal = () => setState(null)

  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setState(null)
      }
    }

    if (state === id) {
      document.addEventListener(eventListener, handleEsc)
    }

    return () => document.removeEventListener(eventListener, handleEsc)
  }, [setState, state, id])

  if (state !== id || !modalRoot) return null

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity z-50 overflow-y-auto" onClick={closeModal}>
    <div className={className} ref={modalRef} onClick={handleContentClick}>
      <Button label="Cerrar" className="absolute top-2 right-2 ml-2 rounded-lg border-2 border-transparent hover:border-2 hover:outline-0 hover:border-hover-light" ParentMethod={closeModal}>
        <Icon icon="close" color="currentColor" size="24" />
      </Button>
      <h2 className="text-2xl font-semibold mb-4 text-center mt-6">{title}</h2>
      <div>
          {children}
      </div>
    </div>
  </div>,
    modalRoot)
}

export { Modal }