import { createContext, useReducer } from "react";
import {
  addNumAction,
  decrmentAction,
  incrmentAction,
  resetAction,
} from "./actions";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

// 1. 컨텍스트 생성
export const CounterContext = createContext();
// 2. 프로바이더 생성
export function ConunterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    v: state.count,
    incrment: () => dispatch(incrmentAction()),
    decement: () => dispatch(decrmentAction()),
    reset: () => dispatch(resetAction()),
    add: a => dispatch(addNumAction(a)),
  };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}
