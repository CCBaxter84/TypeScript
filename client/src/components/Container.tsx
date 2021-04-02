import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import ControllerBtns from "./ControllerBtns";
import WalletBalance from "./WalletBalance";
import SpentUnspent from "./SpentUnspent";

const Container: FC = () => {
  return (
    <main>
      <ControllerBtns/>
      <Switch>
        <Route exact path="/full">
          <WalletBalance />
        </Route>
        <Route exact path="/spent">
          <SpentUnspent />
        </Route>
      </Switch>
    </main>
  );
}

export default Container;