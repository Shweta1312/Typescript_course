const today = new Date();
console.log(today.getMonth());
console.log(today);

const person = {
  age: 20,
};

console.log(person.age);

//Type annotations with variables

let apple = 20;
let day: string = "Sunday";
let nothing: null = null;
let hasName: boolean = true;
let nothingmuch: void = null;

//Array
let arr: number[] = [1, 2, 3, 4];

//Class
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 20,
  y: 10,
};

//Functions
let func = (i: number): number => {
  return i + 1;
};

let i = func(2);

//When to use annotation
//1) Function that returns any type

const json = '{"x":98,"y":20}';
const cordinates: { x: number; y: number } = JSON.parse(json);
console.log(cordinates);

const add = (x: number, y: number) => {
  console.log(x + y);
};
