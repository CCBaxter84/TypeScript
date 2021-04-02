import { FC } from "react";
import { IBtnProps } from "./interfaces";

const Button: FC<IBtnProps> = ({ highlighted, handleClick, name, fullName, className }) => {
  return (
    <button
      className={className}
      name={name}
      onClick={handleClick}
    >{fullName}
    </button>
  );
}

export default Button;