var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var People = /** @class */ (function () {
    function People() {
    }
    People.prototype.sayHello = function () {
        console.log("people say hello ts");
    };
    return People;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 继承时，子类修饰符等级须 >= 父类
    Student.prototype.task = function () {
        console.log("learning");
    };
    Student.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this);
        console.log("student say hello ts");
        return true;
    };
    return Student;
}(People));
console.log(new Student().sayHello());
