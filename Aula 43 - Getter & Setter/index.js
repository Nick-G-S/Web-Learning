// getter = special method that makes a property readable
// setter = special method that makes a property writeable

//  ======================== FIRST EXEMPLE ===========================

// class Rectangle{ 
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         } else {
//             console.error("With must be a positive number");
//         }
//     }

//     set height(newHeight){
//         if (height > 0){
//             this._height = newHeight;
//         } else{ 
//             console.error("Height must be a positive number");
//         }
//     }

//     get width(){
//     return `${this._width.toFixed(1)}cm`;
//     }

//     get height(){
//         return `${this._height.toFixed(1)}cm`;
//     }

//     get area(){
//         return `${(this._width * this._height).toFixed(1)}cm²`;
//     }
// }

// const rectangle = new Rectangle (3, 4);

// rectangle.width = -1000000
// rectangle.height = "pizza"

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);


//  ======================== SECOUND EXEMPLE ===========================

class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (newAge === "number" && newAge > 0) {
            this._age = newAge
        } else {
            console.error("Age must be a non-negative number");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return this._fistName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }

}


const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
