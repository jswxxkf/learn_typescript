interface Identities<V, M> {
  value: V,
  message: M
}

function identity<T, U>(value: T, message: U): Identities<T, U> {
  console.log(value + " " + typeof value)
  console.log(message + " " + typeof message)
  return {
    value,
    message
  }
}

console.log(identity<number, string>(26, 'xkf'));