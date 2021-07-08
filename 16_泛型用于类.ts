interface GenericInterface<U> {
  value: U,
  getIdentity: () => U
}

class IdentityClass<T> implements GenericInterface<T> {
  value: T

  constructor(value: T) {
    this.value = value
  }

  getIdentity(): T {
    return this.value
  }
}

const myNumberClass = new IdentityClass(68);
console.log(myNumberClass.getIdentity());

const myStringClass = new IdentityClass('xkf');
console.log(myStringClass.getIdentity());
