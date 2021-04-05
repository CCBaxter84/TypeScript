// State interface
export interface IState {
  address: string,
  spent: boolean | null,
  balance: number | null,
  error: string,
  fullOrSpent: boolean | null
}

export const initialState: IState = {
  address: "",
  spent: null,
  balance: null,
  error: "",
  fullOrSpent: null
}

// Action Interfaces
type Action =
  | { type: "ADDRESS", value: string }
  | { type: "ERROR", value: string }
  | { type: "BALANCE", value: number | null }
  | { type: "SPENT", value: boolean | null }
  | { type: "FULLORSPENT", value: boolean | null }

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
    case "FULLORSPENT":
      return { ...state, fullOrSpent: action.value }
    default:
      return state;
  }
}