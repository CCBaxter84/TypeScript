import { FC, useState } from "react";
import { IHandler } from "./interfaces";

const WalletBalance: FC = () => {
  const [ address, setAddress ] = useState<string>("");

  const handleChange: IHandler = event => {
    const { value } = event.currentTarget;
    setAddress(value);
  }

  const handleSubmit: IHandler = event => {
    event.preventDefault();
  }

  return (
    <section className="outer">
      <h2>BTC Wallet</h2>
      <section className="inner">
        <form onSubmit={handleSubmit}>
          <label>Wallet:
            <input
              type="text" name="address" value={address} onChange={handleChange}
            />
          </label>
        </form>
      </section>
    </section>
  );
}

export default WalletBalance;