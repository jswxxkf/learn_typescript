class Student {
  fullName: string;

  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + " " + lastName;
  }
}

let stu = new Student("kaifeng", "xue");
console.log(stu.firstName, stu.lastName);