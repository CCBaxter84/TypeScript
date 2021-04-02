import { FC, useState } from "react";
import { IClick, IToggler } from "./interfaces";
import Button from "./Button";

interface IProps {
  toggleSpent: IToggler
}

const SpentBtns: FC<IProps> = ({ toggleSpent }) => {
  const [ highlighted, setHighlighted ] = useState<string | null>(null);

  const handleClick: IClick = event => {
    const { name } = event.currentTarget;
    setHighlighted(name);
    const isSpent = name === "spent";
    toggleSpent(isSpent);
  }

  return (
    <section className="spent-btns">
      <Button name="spent" fullName="Spent"
        handleClick={handleClick} highlighted={highlighted}
      />
      <Button name="unspent" fullName="Unspent"
        handleClick={handleClick} highlighted={highlighted}
      />
    </section>
  );
}

export default SpentBtns;