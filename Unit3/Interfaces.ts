interface Person {
  // this fields(and the method signature) will be required for any class implements this interface
  firstName: string;
  lastName: string;
  fullName(): string;
}

class Foo implements Person {
  firstName: string;
  lastName: string;
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let paxi: Foo = new Foo();

paxi.firstName = 'paxi';
paxi.lastName = 'paxi';
console.log(paxi.fullName());
