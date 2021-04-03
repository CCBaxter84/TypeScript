import { FC } from "react";

interface IProps {
  balance: number | null
}

const Balance: FC<IProps> = ({ balance }) => {
  return (
    <section className="inner2">
      <p>Balance: </p>
      {balance !== null && <p className="desc">{balance}</p>}
    </section>
  );
}

export default Balance;