"use strict";
// interface Person {
//     name: string
//     age: number
//     isStudent: boolean
// }
Object.defineProperty(exports, "__esModule", { value: true });
var employees = [
    { name: "John Doe", position: "Developer" },
    { name: "Maxi", position: "Designer" },
    { name: "Alice", position: "Developer" },
    { name: "Bob", position: "Designer" },
    { name: "Charlie", position: "Project Manager" }
];
var user = { id: 21, name: "John Doe", status: "active" };
console.log("User Status: ".concat(user.status, ", Name: ").concat(user.name));
