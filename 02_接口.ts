interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return "hello, " + person.firstName + " " + person.lastName;
}

let user: Person = {firstName: "kaifeng", lastName: "xue"}

document.body.innerHTML = greeter(user);