import { FC } from "react";
import { ISpentForm } from "../helpers/interfaces";
import SpentBtns from './SpentBtns';

const SpentForm: FC<ISpentForm> = ({ data, handleSubmit, handleChange, toggleSpent }) => (
  <form onSubmit={handleSubmit}>
    <label className="form-label">What is your Bitcoin Wallet Address?
      <input
        type="text" name="address" value={data.address} onChange={handleChange} className="input-box"
      />
    </label>
    <label>Do you want your spent or unspent balance?
      <SpentBtns toggleSpent={toggleSpent}/>
    </label>
    <input className="btn submit-btn" type="submit" value="Submit"/>
  </form>
);

export default SpentForm;