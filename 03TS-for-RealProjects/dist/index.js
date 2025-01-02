"use strict";
// class User{
//     username: string
//     email: string
//     address: string = ""
//     constructor(username: string, email: string){
//         this.email = email;
//         this.username = username
//     }
// }
// ---- shortcut way to write this code
// class User{
//     address: string = "california, USA"
//     constructor(
//         public username: string, 
//         public email: string,
//         // private userId: string
//         ){
//     }
// }
// const john = new User("John Doe", "john@example.com")
// console.log(john)
// john.address = "california, USA"
// console.log(john.address);
// getter and setter
class User {
    // whatever there is marked as protected is accessible only within 
    // the class and also within subclass which inherit that class
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this._courseCount = 1;
    }
    // the var or method declare with private is accessed only
    // within the class
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(val) {
        if (val <= 1) {
            throw new Error("Course Number should be more than 1");
        }
        this._courseCount = val;
        // In setter method, there is no return type, just manipulation
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isActive = false;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}