var IdentityClass = /** @class */ (function () {
    function IdentityClass(value) {
        this.value = value;
    }
    IdentityClass.prototype.getIdentity = function () {
        return this.value;
    };
    return IdentityClass;
}());
var myNumberClass = new IdentityClass(68);
console.log(myNumberClass.getIdentity());
var myStringClass = new IdentityClass('xkf');
console.log(myStringClass.getIdentity());
