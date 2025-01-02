// const user ={
//     name: "john doe",
//     email: "john@example.com",
//     isActive: false
// }   

// function createUser({name: string, isPaid: boolean}){
//     return {}
// }
// console.log(createUser({name: "john doe", isPaid: false}));


// function createCourse():{name: string, price: number}{     // ---- {} is return type here
//     return {name: "Reactjs", price: 99.9}
// }
// console.log(createCourse());


// // ---- Odd behaviour regarding the objects in TS

// let newUser = {
//     name: "maxi doe", 
//     isPaid: true, 
//     email: "maxi@example.com"
// }
// console.log(createUser(newUser));

// function printName(user:{first: string, last: string}){
//     console.log(user.first + " " + user.last)
// }
// printName({first: "John", last: "Doe"})


// ---- Next concept or another file here

// type User = {
//     name: string;
//     email :string;
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name:"", email: "", isActive:true}
// }
// createUser({name:"", email: "", isActive:true})

type Point ={
    x: number, 
    y: number
}

function printCoord(pt: Point){
    console.log("x value is: " + pt.x)
    console.log("y value is: " + pt.y);   
}
printCoord({x: 100, y: 100})


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    accountDetails?: string // ---- ? -> for optional
}

let myUser: User = {
    _id: "1234",
    name: "JOhn Doe",
    email: "johm@example.com",
    isActive: false
}

myUser.email = "johndoe@example.com" // new email of user
// myUser._id = "5642" // Cannot assign to '_id' because it is a read-only property.

type cardNumber = {
    cardNum: string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {}
