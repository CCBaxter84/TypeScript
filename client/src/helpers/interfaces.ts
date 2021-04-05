import { MouseEvent, FormEvent } from "react";
import { IState } from "./reducer";

export interface IClick {
  (event: MouseEvent<HTMLButtonElement>): void
}

export interface IHandler {
  (event: FormEvent<HTMLFormElement | HTMLInputElement>): void
}

export interface IToggler {
  (fullOrSpent: boolean | null): void
}

export interface IReset {
  (): void
}

export interface IBtnProps {
  highlighted: string | null,
  handleClick: IClick,
  name: string,
  fullName: string,
  className: string
}

export interface IFormProps {
  handleSubmit: IHandler,
  handleChange: IHandler,
  data: IState
}

export interface ISpentForm extends IFormProps {
  toggleSpent: IToggler,
  data: IState
}

export interface ICtrLayout extends ISpentForm {
  resetState: IReset
}

export interface IFormCtrProps extends ISpentForm {
  wantsFull: boolean,
  name: string
}