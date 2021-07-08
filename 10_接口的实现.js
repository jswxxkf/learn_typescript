var Bar = /** @class */ (function () {
    function Bar() {
        console.log("---");
    }
    Bar.prototype.sayHello = function () {
        console.log("hello typescript");
    };
    return Bar;
}());
var bar = new Bar();
bar.name = "xkf";
console.log(bar.name);
