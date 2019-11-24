class Person {
  nickname: string;
  message: string;
  greetingNickname(): string {
    return `Hey, ${this.nickname}, what is up! \n ${this.message}`;
  }

  constructor(message: string) {
    this.nickname = 'stranger';
    // constructor runs before initialization of the object, it can be used for default values
    this.message = message;
  }
}

var paxi: Person = new Person('I am good, how about you man!'); // specify that the new instance paxi is from type Person
paxi.nickname = 'paxi'; //assign a value for the nickname
paxi.unexistingProp = 'this will throw an error'; // if the property doesn't exist in Person class tsc it will complain

console.log(paxi.greetingNickname()); // call function that return string

var stranger = new Person('I am good bro, how about you!');

console.log(stranger.greetingNickname());
