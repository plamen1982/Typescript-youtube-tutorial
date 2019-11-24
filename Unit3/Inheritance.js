var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greeting = function () {
        return "Hey, " + this.nickname + ", what is up! \n " + this.message;
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greeting = function () {
        return "Hey I am programmar.... \uD83D\uDD25";
    };
    Programmer.prototype.greetPerson = function () {
        _super.prototype.greeting.call(this);
    };
    return Programmer;
}(Person));
var paxi = new Programmer('no message her for now');
paxi.nickname = 'paxi';
paxi.message = 'I am good my man!';
console.log(paxi.greeting());
console.log(paxi.greetPerson());
var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.sayName = function () {
        return "I am " + this.name;
    };
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this.height * this.width;
        },
        set: function (value) {
            this._area = value;
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        var _this = 
        // Here, it calls the parent class's constructor with lengths
        // provided for the Rectangle's width and height
        _super.call(this, length, length) || this;
        _this.height; // ReferenceError, super needs to be called first!
        // Note: In derived classes, super() must be called before you
        // can use 'this'. Leaving this out will cause a reference error.
        _this.name = 'Square';
        return _this;
    }
    return Square;
}(Rectangle));
var square = new Square(10);
console.log(square.area);
