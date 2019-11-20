var fn = () => 'hello world';

var a: number;
var b: boolean;
var c: string;
var myArr: number[];
var myArrayWithFixedSizeAndExactPlacesOfTheTypes: [number, boolean, undefined];

a = 10;
b = true;
c = 'Hello';
myArr = [1, 2, 3];
myArrayWithFixedSizeAndExactPlacesOfTheTypes = [1, true, undefined]; // if you change the places of items from the array like
//this => [true, 1, undefined] - you will have an error since the places of 1 and true should be with different positions

//Types in Typescript :
/* 
  Data Types:
    Primative Types:
      undefinded;
      null;
      number[] - array this is array of numbers, number can be string, object, boolean or any other valid type
      tuple - something like an array but you can list the types that this array can hold
**/
