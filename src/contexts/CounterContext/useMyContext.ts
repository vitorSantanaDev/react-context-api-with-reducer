import { useContext } from "react";
import { Context } from "./context";

export const useMyContext = () => {
  const context = useContext(Context);
  if(typeof context === 'undefined') {
    throw new Error('You have to use useMyContext inside <CounterContextProvider />')
  }
  return [ ...context ];
};
