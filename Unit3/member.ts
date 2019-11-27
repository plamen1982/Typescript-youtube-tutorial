class Person {
  /*
  members can be private, protected and public
  private is accessible only inside the class that is declared, it cannot be accessed from instance of this class
  protected is accessible inside of the class that is protected and inside of the class that inherit this class but cannot be accessed from instance of the extended class or from instance of the direct class? - check if the last thing is true
  public class is accessible from the class and from the instance of the class and from any inherit class or instance 
  **/
  constructor(private name: string) {
    this.greet();
  } // private properties inside the constructor
  greet(): string {
    return `Hey, what is up ${this.name}!`;
  }
  getName() {
    return this.name;
  }
  setName(nameToApply: string) {
    this.name = nameToApply;
  }
}

class Driver extends Person {
  drivingSkills: string;
  constructor() {
    super('paxi');
  }
  greetDriver() {
    `${this.getName()} I header that you have great ${
      this.drivingSkills
    } skills`;
  }
}

var paxiDriver = new Driver('paxi');
//TODO check why you have undefined on both messages
console.log(paxiDriver.greetName());
console.log(paxiDriver.greetDriver());
