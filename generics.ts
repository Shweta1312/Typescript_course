class ArrayOfNumbers{
  constructor(public collection: number[]){}

  get(index: number): number{
    return this.collection[index];
  }
}

class ArrayOfStrings{
  constructor(public collection: number[]){}

  get(index:number): number{
    return this.collection[index];
  }
}

class ArrayOfAnything<T>{
  constructor(public collection: T[]){}

  get(index:number): T{
    return this.collection[index];
  }
}

const arr1 = new ArrayOfAnything<number>([1,2,3,4]);

const arr2 = new ArrayOfAnything(['1','2','3','4']);

//Generic functions

function printNumbers(arr: number[]): void{
  for(let i=0;i<arr.length; i++){
    console.log(arr[i]);
  }
}


function printString(arr: string[]): void{
  for(let i=0;i<arr.length; i++){
    console.log(arr[i]);
  }
}


function printAnything<T>(arr: T[]): void{
  for(let i=0;i<arr.length; i++){
    console.log(arr[i]);
  }
}

printAnything<string>(['1','2','3','4']);

printAnything([1,2,3,4]);

//Generic Constraints

class Car{
  print(): void{
    console.log("This is Car");    
  }
}

class House{
  print(): void{
    console.log("This is House");
  }
}

interface Printable{
  print(): void;
}


function printHousesOrCars<T extends Printable>(arr: T[]){
  for(let i=0;i<arr.length; i++){
    arr[i].print();
  }
}

printHousesOrCars([new House, new House]);

printHousesOrCars([new Car])