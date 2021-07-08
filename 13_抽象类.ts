abstract class People {
  private name: string;

  protected abstract task(): void

  public sayHello(): void {
    console.log("people say hello ts")
  }
}

class Student extends People {
  // 继承时，子类修饰符开放等级须 >= 父类
  public task(): void {
    console.log("learning")
  }

  public sayHello(): boolean {
    super.sayHello()
    console.log("student say hello ts")
    return true
  }
}

console.log(new Student().sayHello())