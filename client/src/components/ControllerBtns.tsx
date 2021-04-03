import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IClick } from "../helpers/interfaces";
import Button from './Button';

interface IProps {
  resetState: () => void
}

const ControllerBtns: FC<IProps> = ({ resetState }) => {
  const [ highlighted, setHighlighted ] = useState<string | null>(null);

  const handleClick: IClick = event => {
    const { name } = event.currentTarget;
    setHighlighted(name);
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