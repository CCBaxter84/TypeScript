import { FC } from "react";
import { IFormProps } from "./interfaces";

const WalletForm: FC<IFormProps> = ({ address, handleSubmit, handleChange }) => {

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label">What is your Bitcoin Wallet Address?
        <input
          type="text" name="address" value={address} onChange={handleChange} className="input-box"
        />
      </label>
    </form>
  );
}

export default WalletForm;