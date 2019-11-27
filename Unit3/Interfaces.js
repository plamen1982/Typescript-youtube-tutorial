var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Foo;
}());
var paxi = new Foo();
paxi.firstName = 'paxi';
paxi.lastName = 'paxi';
console.log(paxi.fullName());
