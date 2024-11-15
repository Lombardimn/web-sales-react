import { ReactNode } from "react"

interface ButtonProps {
  label: string
  className: string
  children?: ReactNode
  ParentMethod: () => void
}

const Button = ({ label, ParentMethod, className, children }: ButtonProps) => {
  return (
    <button
      aria-label={label}
      className={className}
      onClick={ParentMethod}
    >
      {children}
    </button>
  )
}

export { Button }