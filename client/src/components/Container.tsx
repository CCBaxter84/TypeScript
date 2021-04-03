import { FC, useState, useEffect } from "react";
import { IHandler, IToggler } from "./interfaces";
import { getFullBalance, getSpentBalance } from "./fetchFunctions";
import ContainerLayout from "./ContainerLayout";

const Container: FC = () => {
  const [ address, setAddress ] = useState<string>("1CL5TbB2MaR4mrFjtYQ5GyA3cP2bSmPx");
  const [ spent, setSpent ] = useState<boolean | null>(null);
  const [ balance, setBalance ] = useState<number>(0);

  useEffect(() => {
    getFullBalance(address)
      .then(balance => console.log(balance));
  }, [balance]);

  const handleChange: IHandler = event => {
    const { value } = event.currentTarget;
    setAddress(value);
  }

  const handleSubmit: IHandler = (event) => {
    event.preventDefault();
    if (spent === null) {
      getFullBalance(address)
        .then(balance => setBalance(balance))
        .catch(error => console.log(error));

    } else {
      getSpentBalance(address, spent)
        .then(balance => setBalance(balance))
        .catch(error => console.log(error));
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