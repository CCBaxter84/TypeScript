import { FC, useReducer } from "react";
import { IHandler, IToggler } from "../helpers/interfaces";
import { getFullBalance, getSpentBalance } from "../helpers/fetchFunctions";
import { reducer, initialState } from "../helpers/reducer";
import ContainerLayout from "./ContainerLayout";

const Container: FC = () => {
  // State management
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { address, spent } = state;

  // Event Handler functions
  const handleChange: IHandler = event => {
    const { value } = event.currentTarget;
    dispatch({ type: "ADDRESS", value: value });
  }
  const handleSubmit: IHandler = (event) => {
    event.preventDefault();
    // Guard clause for empty address
    if (address.length === 0) {
      dispatch({ type: "ERROR", value: "Must provide a BTC Wallet Address" });
      setTimeout(() => dispatch({ type: "ERROR", value: "" }), 5000);
      return;
    }
    // Fetch respective balance from back-end
    if (spent === null) {
      getFullBalance(address)
        .then(res => {
          if (res.balance) {
            dispatch({ type: "BALANCE", value: res.balance });
          } else {
            dispatch({ type: "ERROR", value: res.error });
          }
        });
    } else {
      getSpentBalance(address, spent)
        .then(res => {
          if (res.balance) {
            dispatch({ type: "BALANCE", value: res.balance });
          } else {
            dispatch({ type: "ERROR", value: res.error });
          }
        });
    }
  }
  const toggleSpent: IToggler = isSpent => {
    dispatch({ type: "SPENT", value: isSpent });
  }
  const resetState = () => {
    dispatch({ type: "ADDRESS", value: "" });
    dispatch({ type: "SPENT", value: null });
    dispatch({ type: "ERROR", value: "" });
    dispatch({ type: "BALANCE", value: null });
  }

  return (
    <ContainerLayout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      toggleSpent={toggleSpent}
      resetState={resetState}
      data={state}
    />
  );
}

export default Container;