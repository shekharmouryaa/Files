
// Conditional Statements in JavaScript

    // If else


    // let a = 10;
    // let b = 15;
    // let c = 20;
    // let d = 0;


        // if(a >= b){
        //     console.log("if")
        //  }else if(d){
        //     console.log("else if 1");
        //  }else if(c){
        //     console.log("else if 2");
        //  }else{
        //     console.log("else");
        //  }


// TRUTHY OR FALSY VALUE 

    // let x = 0 - false
    // let y = 1 - true
    // let z = false - false
    // let p = "shekhar" - true
    // let q = "" - false
    // let r = null - false
    // let s = undefined - false
    // let t = "10" - true
    // let n = {} - true
    // let g = [] - true
    // let j = [].length - false

     //  if(p){
    //     console.log("if")
    //  }
    //  else{
    //     console.log("else");
    //  }

    // let a;
    // console.log(a)


// SWITCH STAEMENT

    // let username = "Sachin"

    // switch (username) {
    //     case "Shekhar":
    //         console.log("username is Shekhar")
    //         break;
    //     case "Shashank":
    //         console.log("username is Shashank")
    //         break;
    //     case "John":
    //         console.log("username is John")
    //         break;
    //     default:
    //         console.log("username not found")
    //         break;
    // }



// JS LOOP

let x = 5;
for(let i=0; i<=x; i++){
    console.log(i)
    debugger
}

// while(i<5){
//     console.log("i -->" , i)
//     i++;
// }

// let x = 5;
// let i = 0;

// do{
// console.log("i -->" , i)
// i++;
// }while(i<x)


// let x = 5;
// let i = 0;
// do{
//     i++;
// console.log("i -->" , i)
// }while(i<x)


// Looping through Arrays


// let weekName =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

// for(let i=0; i<=weekName.length; i++){
// console.log("--->",weekName[i])
// }

// for (const item of weekName) {
//     console.log(item)
// }

// for (const index in weekName) {
//     console.log(index)
// }


// let updatedWeek= weekName.map((item,index) => `${index+1} ${item} `)

// weekName.forEach(items => {
//     console.log(items)
// })


// Iterating through Objects

// const user = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true
// };

// for (const key in user) {
//  console.log(`${key}: ${user[key]}`);
// }

    // let name = "shekhar"
    // let age = 10;
    // console.log("my name is" +" " + name + " " + "and age is" + " " + age) 
    // console.log(`my name is ${name} and age is ${age}`) 

    // for(const key in user) {
    //   if (user.hasOwnProperty(key)) {
    //        console.log(`${key}: ${user[key]}`);
    //     }
    //   }

    // for (const [key, value] of Object.entries(courses)) {
    // console.log(`${key}: ${value}`);
    // }

// Common Looping Patterns

// Practice Question

 https://www.tutorialstonight.com/js/javascript-star-pattern

