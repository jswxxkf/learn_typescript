// function identity(value: number): number {
//   return value * 2;
// }
//
// console.log(identity(1));

// 使用泛型来扩展预期参数类型
// function identity<T>(value: T): T {
//   return value;
// }
//
// console.log(identity<number>(1));

// 再进行扩展：
function identity<T, U>(value: T, message: U):T {
  console.log(message);
  return value;
}

// console.log(identity<number, string>(26, 'xkf'));
// 也可以使用类型自动推断
console.log(identity(26, 'xkf'));