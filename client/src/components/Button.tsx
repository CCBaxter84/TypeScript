import { FC } from "react";
import { IBtnProps } from "./interfaces";

const Button: FC<IBtnProps> = ({ highlighted, handleClick, name, fullName }) => {
  return (
    <button
      className={`btn ${highlighted === name && "highlight"}`}
      name={name}
      onClick={handleClick}
    >{fullName}
    </button>
  );
}

export default Button;