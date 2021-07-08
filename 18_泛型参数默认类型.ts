// 用法：<T=Default Type>
interface A<T = string> {
  username: T
}

const strA: A = {
  username: 'xkf'
}
const numB: A<number> = {
  username: 26
}