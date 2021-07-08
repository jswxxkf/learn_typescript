class People {
  constructor() {
    console.log("---")
  }
  // 对应JS中，是直接把nickname作为People的属性
  // 因为JS中一切皆对象
  public static nickname: string = 'xkf';
}

const p: People = new People();
// 报错
// console.log(p.nickname);
console.log(People.nickname);

class Foo {
  // 构造函数的参数前使用修饰符声明，则参数属性直接声明一个属性成员
  constructor(public name: string) {
    console.log('---')
  }
}

const foo: Foo = new Foo('xkf');
console.log(foo.name);
