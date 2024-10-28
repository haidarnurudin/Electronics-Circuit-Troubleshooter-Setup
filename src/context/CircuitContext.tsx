import React, { createContext, useContext, useReducer } from 'react';

type Component = {
  id: string;
  type: string;
  position: { x: number; y: number };
  properties: Record<string, any>;
};

type CircuitState = {
  components: Component[];
  connections: Array<{ from: string; to: string }>;
};

type CircuitAction =
  | { type: 'ADD_COMPONENT'; payload: Component }
  | { type: 'REMOVE_COMPONENT'; payload: string }
  | { type: 'ADD_CONNECTION'; payload: { from: string; to: string } }
  | { type: 'REMOVE_CONNECTION'; payload: { from: string; to: string } }
  | { type: 'UPDATE_COMPONENT_POSITION'; payload: { id: string; position: { x: number; y: number } } };

const initialState: CircuitState = {
  components: [],
  connections: [],
};

const CircuitContext = createContext<{
  state: CircuitState;
  dispatch: React.Dispatch<CircuitAction>;
} | null>(null);

function circuitReducer(state: CircuitState, action: CircuitAction): CircuitState {
  switch (action.type) {
    case 'ADD_COMPONENT':
      return {
        ...state,
        components: [...state.components, action.payload],
      };
    case 'REMOVE_COMPONENT':
      return {
        ...state,
        components: state.components.filter((c) => c.id !== action.payload),
        connections: state.connections.filter(
          (conn) => conn.from !== action.payload && conn.to !== action.payload
        ),
      };
    case 'ADD_CONNECTION':
      return {
        ...state,
        connections: [...state.connections, action.payload],
      };
    case 'REMOVE_CONNECTION':
      return {
        ...state,
        connections: state.connections.filter(
          (conn) =>
            conn.from !== action.payload.from || conn.to !== action.payload.to
        ),
      };
    case 'UPDATE_COMPONENT_POSITION':
      return {
        ...state,
        components: state.components.map((component) =>
          component.id === action.payload.id
            ? { ...component, position: action.payload.position }
            : component
        ),
      };
    default:
      return state;
  }
}

export function CircuitProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(circuitReducer, initialState);

  return (
    <CircuitContext.Provider value={{ state, dispatch }}>
      {children}
    </CircuitContext.Provider>
  );
}

export function useCircuit() {
  const context = useContext(CircuitContext);
  if (!context) {
    throw new Error('useCircuit must be used within a CircuitProvider');
  }
  return context;
}