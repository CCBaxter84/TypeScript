import { FC } from "react";

interface IProps {
  error: string
}

const ErrorMessage: FC<IProps> = ({ error }) => {
  if (error.length === 0) {
    return <></>
  }

  return (
    <section className="error-msg">
      <p>Error: {error}</p>
    </section>
  );
}

export default ErrorMessage;