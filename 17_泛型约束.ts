// 1. extends关键字 => 确保属性存在
// 报错！Property 'length' does not exist on type 'T'
// function identity<T>(arg: T): T {
//   console.log(arg.length);
//   return arg
// }
//
// console.log(identity<number>(18));

interface Length {
  length: number
}

function identity<T extends Length>(arg: T): T {
  // 必须确保arg参数上存在length属性
  console.log(arg.length);
  return arg
}

console.log(identity<number[]>([1, 2, 3]));
// 报错！Type 'number' does not satisfy the constraint 'Length'.
// console.log(identity<number>(3));

// 2. keyof关键字 => 约束键的类型
interface Person {
  nickname: string,
  age: number,
  location: string
}

// 通过 K extends keyof T 确保参数 key 一定是对象中含有的键，
// 这样就不会发生运行时错误
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

enum Difficulty {
  Easy,
  Intermediate,
  Hard
}

const tsInfo = {
  name: "typescript",
  supersetOf: "javascript",
  difficulty: Difficulty.Intermediate
}

const difficulty: Difficulty = getProperty(tsInfo, 'difficulty');
console.log(difficulty); // 1
// 报错！
// Argument of type '"superset_of"' is not assignable to parameter
// of type '"difficulty" | "name" | "supersetOf"'
// const supersetOf: string = getProperty(tsInfo, 'superset_of');
