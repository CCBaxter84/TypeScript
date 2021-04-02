import { FC, useState } from "react";
import { IHandler, IFormCtrProps } from "./interfaces";
import WalletForm from "./WalletForm";
import SpentForm from "./SpentForm";

const FormContainer: FC<IFormCtrProps> = ({ wantsFull, name }) => {
  const [ address, setAddress ] = useState<string>("");
  const [ spent, setSpent ] = useState<boolean>(false);

  const handleChange: IHandler = event => {
    const { value } = event.currentTarget;
    setAddress(value);
  }

  const handleSubmit: IHandler = event => {
    event.preventDefault();
  }

  const handleToggle: IHandler = event => {
    const { value } = event.currentTarget;
    const spentOrUnspent = value === "spent" ? true : false;
    setSpent(spentOrUnspent);
  }

  return (
    <section className="outer">
      <h2>{name}</h2>
      <section className="inner">
        {wantsFull ?
        <WalletForm address={address}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        /> :
        <SpentForm address={address}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleToggle={handleToggle}
          spent={spent}
        />
        }
      </section>
    </section>
  );
}

export default FormContainer;