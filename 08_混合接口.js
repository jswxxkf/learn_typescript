// 需要使用类型断言as(assert)或者<>
function getPeople() {
    var people = (function () {
        console.log('---');
    });
    people.name = "james";
    people.age = 23;
    people.sayHi = function () {
        console.log('Hi!');
    };
    return people;
}
var p = getPeople();
p();
p.age = 24;
