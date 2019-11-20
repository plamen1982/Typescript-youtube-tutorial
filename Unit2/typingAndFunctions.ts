function sumTwoNumbers(a: number, b: number): number {
  return a + b;
}

console.log(sumTwoNumbers(1, 1)); // if we add more arguments we will have tsc error, and signature should be followed from this one in the declaration

function sumNumbers(
  a: number,
  b: number,
  c: number = 1,
  // d?: number, - optional
  ...allOtherNumbers: number[]
): number {
  // c is optional argument our function and should be at the end
  if (allOtherNumbers.length === 0) {
    return a + b + c;
  }
  return a + b + c + allOtherNumbers.reduce((acc, curr) => acc + curr);
}

console.log(sumNumbers(1, 1, 2, 111, 111, 111, 111));
// console.log(sumNumbers(1, 1)); // the result is 3, since c is with default value of 1
// Next video https://www.youtube.com/watch?v=leErA89nzB8&list=PLqq-6Pq4lTTanfgsbnFzfWUhhAz3tIezU&index=10 - TypeScript Basics 10 - Implicit typing
