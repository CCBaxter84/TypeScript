import { FC } from "react";
import saltLogo from "../saltLogo.png";

const Header: FC = () => (
  <header>
    <img className="salt-logo" src={saltLogo} alt="Salt Logo"/>
  </header>
);

export default Header;