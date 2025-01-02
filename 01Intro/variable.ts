// ---- String
// let greeting = "Hello John" ---- JS Syntax
let greeting: string = "Hello John";  // ---- Ts Syntax

greeting.toLowerCase() // its gives only methods thats are only apply on the strings

console.log(greeting);


// ---- Number
let userId: number = 123456
userId.toLocaleString() // its gives only the numbers methods

let num = 35421.54 // it is still number, not any other type like int or fload



// ---- Boolean
let isLoggedIn: boolean = false
console.log(isLoggedIn.valueOf());



export {} //to reduce the error for temporary

// Declaring the types after name of var, is not good practice of writing code
// we can declare it without passing this "name: string" into typescript
// because typescript is too smart to understand this, and this code is 
//just look like the JS code but there is huge difference in both of code
//example :-

// let name: string = "John Doe" 

// instead of writing code like this, you can also write it into TS like :-
// let name = "John Doe"

// To prove this point that TS is too smart to introduce the type safety
// in code than JS, let's look at given example:

let  id = 123456789
// id = "John Doe"

// it show the error like this :-
// Type 'string' is not assignable to type 'number'.
// That it the diff in between JS and TS



// ---- any

// let hero ;
let hero: string

function getHero(){
    return "Iron Man"
}

hero = getHero() // let hero: any
// always avoid to use any or use flag-noImplicitAny() to encouter this
// To do always declare type:safety syntax like :- hero: string


