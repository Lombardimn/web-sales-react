import { ReactNode } from "react"

interface ButtonProps {
  label: string
  className: string
  type: "button" | "submit"
  children?: ReactNode
  ParentMethod?: () => void
}

const Button = ({ label, ParentMethod, className, type, children }: ButtonProps) => {
  if (type === "submit") {
    return (
      <button
        aria-label={label}
        className={className}
        type={type}
      >
        {children}
      </button>
    )
  }
  
  if (type === "button") {
    return (
      <button
        aria-label={label}
        className={className}
        onClick={ParentMethod}
        type={type}
      >
        {children}
      </button>
    )
  }
  
  return <div>Ups... Error somewhere</div>
}

export { Button }