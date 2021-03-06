import { FC } from "react";
import { IBtnProps } from "../helpers/interfaces";

const Button: FC<IBtnProps> = ({ handleClick, name, fullName, className }) => (
  <button className={className} name={name}
    onClick={handleClick}>{fullName}
  </button>
);

export default Button;