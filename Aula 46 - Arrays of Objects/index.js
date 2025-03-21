
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37},]

// fruits.push({name: "grapes", color: "purple", calories: 62});
// fruits.pop();
// fruits.splice(1, 2);

// console.log(fruits[4].calories);

// fruits.forEach(fruit => console.log(fruit.calories));


// map
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

const fruitColors = fruits.map(fruit => fruit.colors);
console.log(fruitColors);

const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);

 
// filter
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalFruits = fruits.filter(fruit =>fruit.calories < 100);
console.log(lowCalFruits);

const highCalFruits = fruits.filter(fruit =>fruit.calories >= 100);
console.log(highCalFruits);

// reduce

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(maxFruit.calories);
console.log(minFruit.calories);