import React from 'react'
import { useMyContext } from '../../contexts/CounterContext/useMyContext'


const Heading: React.FC = () => {
  const [state] = useMyContext()
  const { counter } = state
  return (
    <h1>Counter: {counter}</h1>
  )
}

export default Heading