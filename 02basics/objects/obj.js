"use strict";
// const user ={
//     name: "john doe",
//     email: "john@example.com",
//     isActive: false
// }   
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
function printCoord(pt) {
    console.log("x value is: " + pt.x);
    console.log("y value is: " + pt.y);
}
printCoord({ x: 100, y: 100 });
function printName(user) {
    console.log(user.first + " " + user.last);
}
printName({ first: "John", last: "Doe" });
