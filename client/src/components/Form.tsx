import { FC } from "react";
import { IHandler } from "./interfaces";

interface Props {
  address: string,
  name: string,
  needsSpent: boolean,
  spent: boolean,
  handleSubmit: IHandler,
  handleChange: IHandler,
  toggleSpent: IHandler
}

const Form: FC<Props> = ({ address, name, needsSpent, spent, handleChange, handleSubmit, toggleSpent }) => {

  return (
    <section className="outer">
      <h2>{name}</h2>
      <section className="inner">
        <form onSubmit={handleSubmit}>
          <label>Wallet:
            <input
              type="text" name="address" value={address} onChange={handleChange}
            />
          </label>
          {needsSpent && <label>
            <input
              type="radio"
            />
            </label>}
        </form>
      </section>
    </section>
  );
}

export default Form;