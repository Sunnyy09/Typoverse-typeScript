// interface Person {
//     name: string
//     age: number
//     isStudent: boolean
// }

// const john: Person = {name: "John Doe", age: 25, isStudent: true}
// console.log(john)

// interface Book {
//     title: string
//     author: string
//     publishedYear: number
//     genre: string
// }

// const Ikigai: Book = {
//     title: "Ikigai",
//     author: "xyz",
//     publishedYear: 2003,
//     genre: "abc"
// }
// console.log(Ikigai);


// ---- Extend Interface

// interface Person {
//     name: string
//     age: number
//     address: string
// }

// interface Student extends Person {
//     grade: string
// }

// const maxi: Student = {
//     name:"Maxi Doe",
//     age:25,
//     address: "Toronto,Canada",
//     grade:"A"
// }
// console.log(maxi);


// ---- Readonly Properties:
// interface Product {
//     readonly id: number
//     name: string
//     price: number
// }

// const electronics: Product = {
//     id: 2256,
//     name: "Laptop",
//     price: 255
// }
// electronics.id = 299
// console.log(electronics);

// ---- Optional Properties
// interface Employee {
//     name: string
//     age: number
//     department?: string
// }

// const first: Employee = {
//     name: "John Doe",
//     age: 26,
//     department: "Sales"
// }
// const second: Employee = {
//     name: "Maxi",
//     age: 28,
// }

// console.log(first);
// console.log(second);


// ---- Function Types

// interface Calculator {
//     add(a: number, b: number): number;
// }

// class MathOperations implements Calculator {
//     add(a: number, b: number): number {
//         return a + b;
//     }

//     subtract(a: number, b :number): number{
//         return a - b;
//     }
// }

// const calculator = new MathOperations();
// console.log(calculator.add(5,4));
// console.log(calculator.subtract(5,4));


// ---- Index Signatures

// interface Dictionary {
//     [key: string]: number
// }

// const pair: Dictionary = {
//     apple: 5,
//     banana: 3,
//     cherry: 7
// }
// console.log(pair);





export {}