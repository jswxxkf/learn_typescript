// 数字索引类型
interface ColorArray {
  [index: number]: string
}

const color: ColorArray = ['Red', 'Blue', 'Green'];

// 字符串索引类型
interface ColorMap {
  [index: string]: string
}

const colorMap: ColorMap = {
  a: 'Red',
  b: 'Blue',
  c: 'Green'
}

// 值得注意的是，在同时使用两种类型的索引的时候，
// 数字索引的返回值必须是字符串索引返回值类型的子类型。
interface Names {
  [x: string]: any,

  [i: number]: string
}

// console.log(colorMap.a);
// console.log(colorMap['b']);
// console.log(color[0]);