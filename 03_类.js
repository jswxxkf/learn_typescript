var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
var stu = new Student("kaifeng", "xue");
console.log(stu.firstName, stu.lastName);
