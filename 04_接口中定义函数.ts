interface Person {
  name: string,
  age: number
}

interface PersonFun {
  (person: Person): string
}

const person: Person = {name: "xkf", age: 25}
const showPerson: PersonFun = function (person: Person) {
  return `hello, ${person.name}`;
};

showPerson(person);
