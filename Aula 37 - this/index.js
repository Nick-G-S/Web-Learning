// this = reference to the object where THIS is used
//        (The object depend on the immediate context)
//        person.name = this.name

// CAREFUL IT DOESN'T WORK WITH ARROW FUNCTIONS

const person1 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

const person2 = {
    name: "Patrick",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
    sayHello2: () => {console.log(`Hi! I am ${this.favFood}`)}
}

