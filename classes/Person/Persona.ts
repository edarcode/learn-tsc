import { ConstructorPerson } from "./types";

export class Person {
  #name: string;
  #age: number;
  #country: string;

  constructor({ name, age, country }: ConstructorPerson) {
    this.#name = name;
    this.#age = age;
    this.#country = country;
  }

  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }
  get country() {
    return this.#country;
  }
  set name(name) {
    this.#name = name;
  }
  set age(age) {
    this.#age = age;
  }
  set country(country) {
    this.#country = country;
  }
}
