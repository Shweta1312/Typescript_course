const beverage = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ["brown", true, 40];

//Type Alias
type Drink = [string, boolean, number];

const slice: Drink = ["yellow", false, 50];

console.log(`Here is the beverage details ${slice}`);
