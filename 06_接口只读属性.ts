interface Person {
  name: string,
  readonly age: number
}

const person: Person = {
  name: "xkf",
  age: 25
}

// Cannot assign to 'age' because it is a read-only property.
// person.age = 22

// 注意此处const和readonly的区别：
// 加了const只是person的引用不能发生改变(地址)
// 而readonly是指具体的属性是只读的
// 其实可以看作是Object.defineProperty(person,age,{writable:false})的语法糖