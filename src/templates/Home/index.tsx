import React from 'react'
import Button from '../../components/Button'
import Heading from '../../components/Heading/index.'
import { useMyContext } from '../../contexts/CounterContext/useMyContext'
import './style.css'

const Home: React.FC = () => {
  const [state, actions] = useMyContext()
  return (
    <>
      <Heading />
      <Button onButtonClick={actions.increase}>Increase</Button>
      <Button onButtonClick={actions.decrease}>Decrease</Button>
      <Button onButtonClick={actions.reset}>Reset</Button>
      <Button onButtonClick={() => actions.setCounter(10)}>x10</Button>
      <Button onButtonClick={() => actions.setCounter(10)}>x100</Button>
      <Button disabled={state.loading} onButtonClick={actions.asynIncrease}>Asyn Increase</Button>
      <Button disabled={state.loading} onButtonClick={actions.asyncError}>Asyn Error</Button>
    </>
  )
}

export default Home