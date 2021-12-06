import React, { createContext, ReactNode, Reducer, useContext, useReducer } from 'react';

type State = boolean;
type Action = { type: 'active' } | { type: 'static' };
type Dispatch = (action: Action) => void;

import { TChildren } from '../types/types';

const CursorHoverContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined,
);

const CursorReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'active':
      return (state = true);
    case 'static':
      return (state = false);
    default: {
      throw new Error();
    }
  }
};

const useCursorContext = () => {
  const context = useContext(CursorHoverContext);
  if (!context) throw new Error('Context Undefined');
  return context;
};

const isActive = false;

const CursorContextProvider = ({ children }: TChildren) => {
  const [cursorState, dispatch] = useReducer(CursorReducer, isActive);
  const curosrStateValue = {
    state: cursorState,
    dispatch: dispatch,
  };
  return (
    <CursorHoverContext.Provider value={curosrStateValue}>{children}</CursorHoverContext.Provider>
  );
};

export { CursorContextProvider, useCursorContext };
