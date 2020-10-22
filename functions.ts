const multiply = (a: number, b: number) => {
  console.log(a * b);
};

function divide(a: number, b: number): number {
  return a / b;
}

const problem = function (x: number, y: number): number {
  return x % y;
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message); //throwa error
  }
};

//Object passed in a function ----Destructuring with Annotations
const todaysWeather: { date: Date; weather: string } = {
  date: new Date(),
  weather: "haru",
};

const dailyreport = ({ date, weather }: { date: Date; weather: string }) => {
  //Instead of todaysWeather:{date, weather}
  console.log(date);
  console.log(weather);
};
//dailyreport(todaysWeather);

//Type Annotations around objects
const personInfo = {
  age: 20,
  name: "Hey there",
  coords: {
    x: 10,
    y: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = personInfo;
const {
  coords: { x, y },
}: { coords: { x: number; y: number } } = personInfo;

console.log(age);
console.log(x, y);
