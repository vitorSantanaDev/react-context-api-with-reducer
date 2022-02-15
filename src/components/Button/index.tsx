import React from 'react'

interface Props {
  children: React.ReactNode
  onButtonClick: () => void
  disabled?: boolean
}

const Button: React.FC<Props> = ({ children, onButtonClick }) => {
  return (
    <button onClick={onButtonClick}>{children}</button>
  )
}

export default Button