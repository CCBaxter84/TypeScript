import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IClick } from "./interfaces";

const ControllerBtns: FC = () => {
  const [ highlighted, setHighlighted ] = useState<string | null>(null);

  const handleClick: IClick = event => {
    const { name } = event.currentTarget;
    setHighlighted(name);
  }

  return (
    <section className="btns">
      <Link to="/full">
        <button
          className={`btn ${highlighted === "full" && "highlight"}`}
          name="full"
          onClick={handleClick}
        >Full Balance
        </button>
      </Link>
      <Link to="/spent">
        <button
          className={`btn ${highlighted === "spent" && "highlight"}`}
          name="spent"
          onClick={handleClick}
        >Spent/Unspent
        </button>
      </Link>
    </section>
  );
}

export default ControllerBtns;