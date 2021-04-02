import { FC, useState } from "react";
import { IHandler, IToggler } from "./interfaces";
import ContainerLayout from "./ContainerLayout";

const Container: FC = () => {
  const [ address, setAddress ] = useState<string>("");
  const [ spent, setSpent ] = useState<boolean | null>(null);

  const handleChange: IHandler = event => {
    const { value } = event.currentTarget;
    setAddress(value);
  }

  const handleSubmit: IHandler = event => {
    event.preventDefault();
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