// variable scope = where a variable is recognized 
//                  and accessible (local vs global)

// explanation 3:01:44, need to see to understand.
let x = 3;
function2();

// function function1(){
//     let x = 1;
//     console.log(y);
// }

// function2(){
//     let y = 2
//     console.log(x);
// }

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2
    console.log(x);
}