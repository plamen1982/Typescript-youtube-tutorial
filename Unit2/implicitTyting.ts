var a = 10;
var b = true;
var c = 'Hello';

function helloWorld(): string {
  return 'Hello world';
}

var hey = helloWorld(); // if we hover hey we will se that is from type string because of the implicit typing
a = 'hey'; // will be underline with error since we have implicit declaration on line 1, where we assing a number, and Typescript is complaining that we try to assing a string
