import { Person } from "./classes/Person/Persona";
import { Teacher } from "./classes/Teacher/Teacher";

const edarcode = new Person({ name: "edarcode", age: 26, country: "Colombia" });
console.log(edarcode.name, edarcode.age, edarcode.country);

const manz = new Teacher({
  name: "manz",
  age: 50,
  country: "España",
  title: "Desarrollador web",
});
console.log(manz.name, manz.age, manz.country);
