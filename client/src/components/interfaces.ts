import { MouseEvent, FormEvent } from "react";

export interface IClick {
  (event: MouseEvent<HTMLButtonElement>): void
}

export interface IHandler {
  (event: FormEvent<HTMLFormElement | HTMLInputElement>): void
}