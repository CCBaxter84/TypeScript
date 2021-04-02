import { FC } from "react";
import { IFormCtrProps } from "./interfaces";
import WalletForm from "./WalletForm";
import SpentForm from "./SpentForm";

const FormContainer: FC<IFormCtrProps> = ({ handleChange, handleSubmit, toggleSpent, address, spent, wantsFull, name }) => (
  <section className="outer">
    <p className="title">{name}</p>
    <section className="inner">
      {wantsFull ?
      <WalletForm address={address}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      /> :
      <SpentForm address={address}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        toggleSpent={toggleSpent}
        spent={spent}
      />
      }
    </section>
  </section>
);

export default FormContainer;