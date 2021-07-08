async function stringPromise() {
  // return Promise<string>
  return "hello, ts";
}

interface Person {
  nickname: string,
  age: number
}

async function personPromise() {
  // return Promise<Person>
  return {
    nickname: "xkf",
    age: 26
  } as Person
}

// 实现类型抽取
type PromiseType<T> = (args: any[]) => Promise<T>
type UnPromisify<T> = T extends PromiseType<infer U> ? U : never;
type extractStringPromise = UnPromisify<typeof stringPromise> // string (type)
type extractPersonPromise = UnPromisify<typeof personPromise> // Person (type)

// ***** val *****
function validate<T, U>(arg1: T, arg2: U): void {
  console.log(arg1, arg2);
}

validate<extractStringPromise, extractPersonPromise>('aaa', {
  nickname: "lidan",
  age: 22
})
// 上述相当于：
validate<string, Person>('aaa', {
  nickname: "lidan",
  age: 22
})