import { FC, useReducer } from "react";
import { IHandler, IToggler } from "../helpers/interfaces";
import { getFullBalance, getSpentBalance } from "../helpers/fetchFunctions";
import { reducer, initialState } from "../helpers/reducer";
import ContainerLayout from "./ContainerLayout";

const Container: FC = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { address, spent } = state;

  const handleChange: IHandler = event => {
    const { value } = event.currentTarget;
    dispatch({ type: "ADDRESS", value: value });
  }

  const handleSubmit: IHandler = (event) => {
    event.preventDefault();
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
    console.log('your mom');
    dispatch({ type: "SPENT", value: isSpent });
  }

  const resetState = () => {
    dispatch({ type: "ADDRESS", value: "" });
    dispatch({ type: "SPENT", value: null });
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