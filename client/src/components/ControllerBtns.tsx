import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IClick, IReset } from "../helpers/interfaces";
import Button from './Button';

interface IProps {
  resetState: IReset
}

const ControllerBtns: FC<IProps> = ({ resetState }) => {
  const [ highlighted, setHighlighted ] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/full") {
      setHighlighted("full");
    } else if (pathname === "/spent") {
      setHighlighted("spent");
    }
  }, [pathname]);

  const handleClick: IClick = event => {
    resetState();
  }

  return (
    <section className="controller-btns">
      <Link to="/full">
        <Button
          className={`btn ${highlighted === "full" && "highlight"}`}
          name="full" fullName="Full Balance"
          handleClick={handleClick} highlighted={highlighted}
        />
      </Link>
      <Link to="/spent">
        <Button
          className={`btn ${highlighted === "spent" && "highlight"}`}
          name="spent" fullName="Spent / Unspent"
          handleClick={handleClick} highlighted={highlighted}
        />
      </Link>
    </section>
  );
}

export default ControllerBtns;