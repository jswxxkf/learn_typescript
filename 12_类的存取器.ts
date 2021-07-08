class Student {
  private _name: string
  public get name(): string {
    return this._name
  }

  // 若无setter，则默认推断为 readonly
  public set name(value: string) {
    this._name = value;
    console.log("setter: " + value)
  }
}

const stu = new Student();
stu.name = 'Tom';
console.log(stu.name);
