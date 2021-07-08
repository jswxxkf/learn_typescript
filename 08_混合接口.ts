interface People {
  (): void,

  name: string,
  age: number,

  sayHi(): void
}

// 需要使用类型断言as(assert)或者<>
function getPeople(): People {
  // 相当于定义People构造函数的方式
  let people: People = (() => {
    console.log('---');
  }) as People;
  people.name = "james";
  people.age = 23;
  people.sayHi = () => {
    console.log('Hi!')
  }
  return people
}

const p = getPeople();
p();
p.age = 24;