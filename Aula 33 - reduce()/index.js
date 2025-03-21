// .reduce() = reduce the elements of an array
//             to a single value

// const prices = [5, 30, 10, 25, 14, 20];
// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element){
//     return accumulator + element;
// }

const grades = [75, 50, 90, 80, 65, 95];
const maximun = grades.reduce(getMax);
const minimun = grades.reduce(getMin);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(){
    return Math.minx(accumulator, element);
}