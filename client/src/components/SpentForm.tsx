import { FC } from "react";
import { ISpentForm } from "./interfaces";
import SpentBtns from './SpentBtns';

const SpentForm: FC<ISpentForm> = ({ address, handleSubmit, handleChange, toggleSpent }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label">What is your Bitcoin Wallet Address?
        <input
          type="text" name="address" value={address} onChange={handleChange} className="input-box"
        />
      </label>
      <SpentBtns toggleSpent={toggleSpent}/>
    </form>
  );
}

export default SpentForm;