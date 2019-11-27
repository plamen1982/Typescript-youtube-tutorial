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
    /*
    members can be private, protected and public
    private is accessible only inside the class that is declared, it cannot be accessed from instance of this class
    protected is accessible inside of the class that is protected and inside of the class that inherit this class but cannot be accessed from instance of the extended class or from instance of the direct class? - check if the last thing is true
    public class is accessible from the class and from the instance of the class and from any inherit class or instance
    **/
    function Person(name) {
        this.name = name;
        this.greet();
    } // private properties inside the constructor
    Person.prototype.greet = function () {
        return "Hey, what is up " + this.name + "!";
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (nameToApply) {
        this.name = nameToApply;
    };
    return Person;
}());
var Driver = /** @class */ (function (_super) {
    __extends(Driver, _super);
    function Driver() {
        return _super.call(this, 'paxi') || this;
    }
    Driver.prototype.greetDriver = function () {
        this.getName() + " I header that you have great " + this.drivingSkills + " skills";
    };
    return Driver;
}(Person));
var paxiDriver = new Driver('paxi');
//TODO check why you have undefined on both messages
console.log(paxiDriver.greetName());
console.log(paxiDriver.greetDriver());
