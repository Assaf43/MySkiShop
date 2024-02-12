export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export interface CounterState {
  data: number;
  title: string;
}

const initialState: CounterState = {
  data: 42,
  title: "YARC ( yet anoter redux counter)",
};

export function increment(amuont = 1) {
  return {
    type: INCREMENT_COUNTER,
    payload: amuont,
  };
}

export function decrement(amuont = 1) {
  return {
    type: DECREMENT_COUNTER,
    payload: amuont,
  };
}

export interface CounterAction {
  type: string;
  payload: number;
}

export default function counterReducer(
  state = initialState,
  action: CounterAction
) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      return state;
  }
}
