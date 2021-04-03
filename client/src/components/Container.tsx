import { FC, useState } from "react";
import { IHandler, IToggler } from "./interfaces";
import { getFullBalance, getSpentBalance } from "./fetchFunctions";
import ContainerLayout from "./ContainerLayout";

const Container: FC = () => {
  const [ address, setAddress ] = useState<string>("");
  const [ spent, setSpent ] = useState<boolean | null>(null);
  const [ balance, setBalance ] = useState<number>(0);

  const handleChange: IHandler = event => {
    const { value } = event.currentTarget;
    setAddress(value);
  }

  const handleSubmit: IHandler = async (event) => {
    event.preventDefault();
    if (spent === null) {
      const balance = await getFullBalance(address);
      setBalance(balance);
    } else {
      const balance = await getSpentBalance(address, spent);
      setBalance(balance);
    }
  }

  const toggleSpent: IToggler = isSpent => {
    console.log('your mom');
    setSpent(isSpent);
  }

  const resetState = () => {
    setAddress("");
    setSpent(null);
  }

  return (
    <ContainerLayout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      toggleSpent={toggleSpent}
      resetState={resetState}
      address={address} spent={spent}
    />
  );
}

export default Container;