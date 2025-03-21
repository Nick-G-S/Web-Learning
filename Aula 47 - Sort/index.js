// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

const people = [{name: "spongebob", age: 30, gpa:3.0},
                {name: "Patrick", age: 37, gpa:1.5},
                {name: "Squidward", age: 52, gpa:2.5},
                {name: "Sandy", age: 37, gpa:4.0}]

people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);