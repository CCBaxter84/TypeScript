import { FC } from "react";
import { ISpentForm } from "./interfaces";

const SpentForm: FC<ISpentForm> = ({ address, handleSubmit, handleChange, handleToggle }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label">What is your Bitcoin Wallet Address?
        <input
          type="text" name="address" value={address} onChange={handleChange} className="input-box"
        />
      </label>
      <input type="radio" value="spent" id="spent"
        onChange={handleToggle}/>
      <label className="radio-label"
        htmlFor="spent">Spent</label>
      <input type="radio" value="unspent" id="unspent"
        onChange={handleToggle}/>
      <label className="radio-label"
        htmlFor="unspent">Unspent</label>
    </form>
  );
}

export default SpentForm;