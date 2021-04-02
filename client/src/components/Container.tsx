import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import ControllerBtns from "./ControllerBtns";
import FormContainer from "./FormContainer";

const Container: FC = () => {
  return (
    <main>
      <ControllerBtns/>
      <Switch>
        <Route exact path="/full">
          <FormContainer wantsFull={true} name="BTC Wallet"/>
        </Route>
        <Route exact path="/spent">
          <FormContainer wantsFull={false} name="Spent / Unspent"/>
        </Route>
      </Switch>
    </main>
  );
}

export default Container;