  
// zadanie 1
const a = "Hello";
const b = "World";
console.log(`${a} ${b}`);

// zadanie 2
const multiply = (a = 1, b = 1) => console.log(a * b);

// zadanie 3
const average = (...args) =>
  console.log(args.reduce((total, arg) => total + arg) / args.length);