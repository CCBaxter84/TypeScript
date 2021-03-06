import { FC } from "react";
import { IFormCtrProps } from "../helpers/interfaces";
import WalletForm from "./WalletForm";
import SpentForm from "./SpentForm";
import Balance from "./Balance";

const FormContainer: FC<IFormCtrProps> = ({ handleChange, handleSubmit, toggleSpent, data, wantsFull, name }) => (
    <section className="outer">
      <p className="title">{name}</p>
      <section className="middle-ctr">
        <section className="inner">
          {wantsFull ?
          <WalletForm data={data}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          /> :
          <SpentForm data={data}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            toggleSpent={toggleSpent}
          />
          }
        </section>
        <Balance balance={data.balance}/>
      </section>
    </section>
  );

export default FormContainer;