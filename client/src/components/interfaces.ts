import { MouseEvent, FormEvent } from "react";

export interface IClick {
  (event: MouseEvent<HTMLButtonElement>): void
}

export interface IHandler {
  (event: FormEvent<HTMLFormElement | HTMLInputElement>): void
}

export interface IBtnProps {
  highlighted: string | null,
  handleClick: IClick,
  name: string,
  fullName: string
}

export interface IFormCtrProps {
  wantsFull: boolean,
  name: string
}

export interface IFormProps {
  address: string,
  handleSubmit: IHandler,
  handleChange: IHandler

}

export interface ISpentForm extends IFormProps {
  handleToggle: IHandler,
  spent: boolean
}