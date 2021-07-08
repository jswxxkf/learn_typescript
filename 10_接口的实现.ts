interface Foo {
  name: string,
  age: number,

  sayHello(): void
}

class Bar implements Foo {
  constructor() {
    console.log("---");
  }
  name: string;
  age: number;

  sayHello() {
    console.log("hello typescript")
  }
}

const bar: Bar = new Bar();
bar.name = "xkf";
console.log(bar.name);