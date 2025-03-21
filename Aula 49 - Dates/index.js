// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted


//Date (year, month, day, hour, minute, secound, ms)
// const date = new Date(2024, 0, 1, 2, 3, 4, 5);
// //or
// const date = new Date("2024-01-02T12:00:00Z");

const date = new Date(17000000000);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const dayOfTheWeek = date.getDay();
const hour = date.getHours();
const minute = date.getMinutes();
const secound = date.getSeconds();

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);


console.log(year);
console.log(month);
console.log(day);
console.log(dayOfTheWeek);
console.log(hour);
console.log(minute);
console.log(secound);


const date1 = new Date ("2023-12-31");
const date2 = new Date ("2024-01-01");

if(date2 > date1){
    console.log("HAPPY NEW YEAR!");
}



