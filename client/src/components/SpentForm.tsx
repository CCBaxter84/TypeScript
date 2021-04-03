import { FC } from "react";
import { ISpentForm } from "../helpers/interfaces";
import SpentBtns from './SpentBtns';
import ErrorMessage from "./ErrorMessage";

const SpentForm: FC<ISpentForm> = ({ data, handleSubmit, handleChange, toggleSpent }) => (
  <form onSubmit={handleSubmit}>
    <label className="form-label">What is your Bitcoin Wallet Address?
      <input
        type="text" name="address" value={data.address} onChange={handleChange} className="input-box"
      />
    </label>
    <label className="form-label">Do you want your spent or unspent balance?
      <SpentBtns toggleSpent={toggleSpent}/>
    </label>
    <input className="btn submit-btn" type="submit" value="Submit"/>
    <ErrorMessage error={data.error}/>
  </form>
);

export default SpentForm;