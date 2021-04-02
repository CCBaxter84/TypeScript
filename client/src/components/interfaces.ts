import { MouseEvent, FormEvent } from "react";

export interface IClick {
  (event: MouseEvent<HTMLButtonElement>): void
}

export interface IHandler {
  (event: FormEvent<HTMLFormElement | HTMLInputElement>): void
}

export interface IToggler {
  (isSpent: boolean): void
}

export interface IBtnProps {
  highlighted: string | null,
  handleClick: IClick,
  name: string,
  fullName: string
}

export interface IFormProps {
  address: string,
  handleSubmit: IHandler,
  handleChange: IHandler
}

export interface ISpentForm extends IFormProps {
  toggleSpent: IToggler,
  spent: boolean | null
}

export interface ICtrLayout extends ISpentForm {
  resetState: () => void
}

export interface IFormCtrProps extends ISpentForm {
  wantsFull: boolean,
  name: string
}