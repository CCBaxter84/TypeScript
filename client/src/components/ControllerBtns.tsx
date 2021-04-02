import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IClick } from "./interfaces";
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
        <Button name="full" fullName="Full Balance"
          handleClick={handleClick} highlighted={highlighted}
        />
      </Link>
      <Link to="/spent">
        <Button name="spent" fullName="Spent / Unspent"
          handleClick={handleClick} highlighted={highlighted}
        />
      </Link>
    </section>
  );
}

export default ControllerBtns;