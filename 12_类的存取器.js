var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        // 若无setter，则默认推断为 readonly
        set: function (value) {
            this._name = value;
            console.log("setter: " + value);
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var stu = new Student();
stu.name = 'Tom';
console.log(stu.name);
