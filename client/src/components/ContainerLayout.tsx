import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { ICtrLayout } from "../helpers/interfaces";
import ControllerBtns from "./ControllerBtns";
import FormContainer from "./FormContainer";

const ContainerLayout: FC<ICtrLayout> = ({
  resetState, handleChange, handleSubmit, toggleSpent, data }) => (
    <main>
      <p className="desc">Check Your Bitcoin Balance</p>
      <ControllerBtns resetState={resetState}/>
      <Switch>
        <Route exact path="/full">
          <FormContainer wantsFull={true} name="BTC Wallet"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            toggleSpent={toggleSpent}
            data={data}
          />
        </Route>
        <Route exact path="/spent">
          <FormContainer
            wantsFull={false} name="Spent / Unspent" handleChange={handleChange}
            handleSubmit={handleSubmit}
            toggleSpent={toggleSpent}
            data={data}
          />
        </Route>
      </Switch>
    </main>
  );

export default ContainerLayout;