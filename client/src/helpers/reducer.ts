// State interface
export interface IState {
  address: string,
  spent: boolean | null,
  balance: number,
  error: string
}

export const initialState: IState = {
  address: "",
  spent: null,
  balance: 0,
  error: ""
}

// Action Interfaces
type Action =
  | { type: "ADDRESS", value: string }
  | { type: "ERROR", value: string }
  | { type: "BALANCE", value: number }
  | { type: "SPENT", value: boolean | null }

// Reducer
export const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "ADDRESS":
      return { ...state, address: action.value }
    case "ERROR":
      return { ...state, error: action.value }
    case "SPENT":
      return { ...state, spent: action.value }
    case "BALANCE":
      return { ...state, balance: action.value }
    default:
      return state;
  }
}