import { FC } from "react";
import { IFormProps } from "../helpers/interfaces";

const WalletForm: FC<IFormProps> = ({ data, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label className="form-label">What is your Bitcoin Wallet Address?
      <input
        type="text" name="address" value={data.address} onChange={handleChange} className="input-box"
      />
    </label>
    <input className="btn submit-btn" type="submit" value="Submit"/>
  </form>
);

export default WalletForm;