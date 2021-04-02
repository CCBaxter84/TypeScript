import { FC, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { IHandler, IToggler } from "./interfaces";
import ControllerBtns from "./ControllerBtns";
import FormContainer from "./FormContainer";

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
    console.log("your mom");
    setAddress("");
    setSpent(null);
  }

  return (
    <main>
      <ControllerBtns resetState={resetState}/>
      <Switch>
        <Route exact path="/full">
          <FormContainer wantsFull={true} name="BTC Wallet"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            toggleSpent={toggleSpent}
            address={address} spent={spent}
          />
        </Route>
        <Route exact path="/spent">
          <FormContainer
            wantsFull={false} name="Spent / Unspent" handleChange={handleChange}
            handleSubmit={handleSubmit}
            toggleSpent={toggleSpent}
            address={address} spent={spent}
          />
        </Route>
      </Switch>
    </main>
  );
}

export default Container;