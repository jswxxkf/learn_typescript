// 1. extends关键字 => 确保属性存在
// 报错！Property 'length' does not exist on type 'T'
// function identity<T>(arg: T): T {
//   console.log(arg.length);
//   return arg
// }
//
// console.log(identity<number>(18));
function identity(arg) {
    // 必须确保arg参数上存在length属性
    console.log(arg.length);
    return arg;
}
console.log(identity([1, 2, 3]));
// 通过 K extends keyof T 确保参数 key 一定是对象中含有的键，
// 这样就不会发生运行时错误
function getProperty(obj, key) {
    return obj[key];
}
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Easy"] = 0] = "Easy";
    Difficulty[Difficulty["Intermediate"] = 1] = "Intermediate";
    Difficulty[Difficulty["Hard"] = 2] = "Hard";
})(Difficulty || (Difficulty = {}));
var tsInfo = {
    name: "typescript",
    supersetOf: "javascript",
    difficulty: Difficulty.Intermediate
};
var difficulty = getProperty(tsInfo, 'difficulty');
console.log(difficulty);
// 报错！
// Argument of type '"superset_of"' is not assignable to parameter
// of type '"difficulty" | "name" | "supersetOf"'
// const supersetOf: string = getProperty(tsInfo, 'superset_of');
