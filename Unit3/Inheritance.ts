class Person {
  nickname: string;
  message: string;
  greeting(): string {
    return `Hey, ${this.nickname}, what is up! \n ${this.message}`;
  }
}
class Programmer extends Person {
  greeting() {
    return `Hey I am programmar.... 🔥`;
  }
  greetPerson() {
    super.greeting();
  }
}

var paxi: Programmer = new Programmer('no message her for now');
paxi.nickname = 'paxi';
paxi.message = 'I am good my man!';
console.log(paxi.greeting());
console.log(paxi.greetPerson());

class Rectangle {
  name: string;
  height: number;
  width: number;
  _area: number;
  constructor(height: number, width: number) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }
  sayName(): string {
    return `I am ${this.name}`;
  }
  get area(): number {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

//With super, where super call the parent constructor
class Square extends Rectangle {
  constructor(length: number) {
    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);
    this.height; // ReferenceError, super needs to be called first!

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }
}

var square: Square = new Square(10);
console.log(square.area);

// Polymorphism you can have multiple instances of multiple classes refer to using a Parent class type

var polyProgrammar: Person = new Programmer(); // in this case we can access only the methods signature that comming from Person class,
//not the ones in Programmer class but when you call them you will call a method implementation from Programmer class
// in a way we restrict some methods from Programmer to be called in the new instance
// next video Interfaces : //https://www.youtube.com/watch?v=v1ShOuVKikM&list=PLqq-6Pq4lTTanfgsbnFzfWUhhAz3tIezU&index=15
