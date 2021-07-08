interface People {
  name: string
}

interface Student extends People {
  age: number
}

let stu: Student = {name: "xkf", age: 20}

// 接口可以多继承
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

const square: Square = {color: "red", penWidth: 2, sideLength: 3}