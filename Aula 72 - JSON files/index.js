// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value, value2, value3]

//        JSON.stringify() = converts an JS onject to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object.

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jasonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30,"isEmployed": true},
                { "name": "Patrick", "age": 34, "isEmployed": false},
                {"name": "Squidwark", "age": 50, "isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": true}]`;

const parseData = JSON.parse(jsonPeople);



fetch("people.json")
   .then(response => response.json())
   .then(values => values.forEach(value => console.log(value.age))).catch(error => console.error(error));