import { FC, useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { IHandler, IReset, IToggler } from "../helpers/interfaces";
import { getFullBalance, getSpentBalance } from "../helpers/fetchFunctions";
import { reducer, initialState } from "../helpers/reducer";
import ContainerLayout from "./ContainerLayout";

const Container: FC = () => {
  // State management
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { address, spent, fullOrSpent } = state;

  // Grab pathname from url and update full or spent state var based on the current route
  const { pathname } = useLocation();
  const toggleFull: IToggler = fullOrSpent => {
    dispatch({ type: "FULLORSPENT", value: fullOrSpent });
  }
  useEffect(() => {
    switch(pathname) {
      case "/full":
        toggleFull(true);
        break;
      case "/spent":
        toggleFull(false);
        break;
      default:
        toggleFull(null);
        break;
    }
  }, [pathname]);

  // Event Handler functions
  const handleChange: IHandler = event => {
    const { value } = event.currentTarget;
    dispatch({ type: "ADDRESS", value: value });
  }
  const resetError = (): void => {
    setTimeout(() => dispatch({ type: "ERROR", value: "" }), 3000);
  }
  const handleSubmit: IHandler = (event) => {
    event.preventDefault();
    // Guard clause for empty address
    if (address.length === 0) {
      dispatch({ type: "ERROR", value: "Must provide a BTC Wallet Address" });
      resetError();
      return;
    }
    // Guard clause for bad spent/unspent request
    if (!fullOrSpent && spent === null) {
      dispatch({ type: "ERROR", value: "Must select either Spent or Unspent" });
      resetError();
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
            resetError();
          }
        });
    } else {
      getSpentBalance(address, spent)
        .then(res => {
          if (res.balance) {
            dispatch({ type: "BALANCE", value: res.balance });
          } else {
            dispatch({ type: "ERROR", value: res.error });
            resetError();
          }
        });
    }
  }
  const toggleSpent: IToggler = fullOrSpent => {
    dispatch({ type: "SPENT", value: fullOrSpent });
  }

  const resetState: IReset = () => {
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