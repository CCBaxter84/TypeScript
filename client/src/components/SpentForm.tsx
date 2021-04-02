import { FC } from "react";
import { ISpentForm } from "./interfaces";
import SpentBtns from './SpentBtns';

const SpentForm: FC<ISpentForm> = ({ address, handleSubmit, handleChange, toggleSpent }) => (
  <form onSubmit={handleSubmit}>
    <label className="form-label">What is your Bitcoin Wallet Address?
      <input
        type="text" name="address" value={address} onChange={handleChange} className="input-box"
      />
    </label>
    <label>Do you want your spent or unspent balance?
      <SpentBtns toggleSpent={toggleSpent}/>
    </label>
  </form>
);

export default SpentForm;