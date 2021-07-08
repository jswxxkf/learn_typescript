interface Person {
  name: string,
  age?: number
}

interface PersonFun {
  (person: Person): string
}

const person: Person = {name: "xkf"}
const showPerson: PersonFun = function (person: Person) {
  return `hello, ${person.name}`;
};

showPerson(person);
