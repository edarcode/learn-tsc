import { Person } from "../Person/Persona";
import { ConstructorTeacher } from "./types";

export class Teacher extends Person {
  #title: string;
  constructor({ title, ...props }: ConstructorTeacher) {
    super({ ...props });
    this.#title = title;
  }
  get title() {
    return this.#title;
  }
  set title(title) {
    this.#title = title;
  }
}
