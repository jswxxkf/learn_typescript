var People = /** @class */ (function () {
    function People() {
        console.log("---");
    }
    // 对应JS中，是直接把nickname作为People的属性
    // 因为JS中一切皆对象
    People.nickname = 'xkf';
    return People;
}());
var p = new People();
// 报错
// console.log(p.nickname);
console.log(People.nickname);
var Foo = /** @class */ (function () {
    // 构造函数的参数前使用修饰符声明，则参数属性直接声明一个属性成员
    function Foo(name) {
        this.name = name;
        console.log('---');
    }
    return Foo;
}());
var foo = new Foo('xkf');
console.log(foo.name);
