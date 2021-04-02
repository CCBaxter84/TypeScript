import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { ICtrLayout } from "./interfaces";
import ControllerBtns from "./ControllerBtns";
import FormContainer from "./FormContainer";

const ContainerLayout: FC<ICtrLayout> = ({
  resetState, handleChange, handleSubmit, toggleSpent, address, spent }) => (
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

export default ContainerLayout;