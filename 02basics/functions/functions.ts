function addTwo(num: number): number{
    return num + 2
    // return "hello typescript" --- it gives the error after declaring
                                    // functions as : number type
}

console.log(addTwo(5));

function getUpper(val: string){
    return val.toUpperCase()
}
console.log(getUpper("john doe"))


function signUpUser(name: string, email: string, isPaid: boolean){
    return {name, email, isPaid}
}
console.log(signUpUser("John Doe","johndoe@example.com", false));

// Try with arrow functions
let loginUser = (email: string, isPaid: boolean = false) => {
    return {email, isPaid}
}
console.log(loginUser("Maxi Doe", true));


// function getValue(val: number){ 
//     if(val > 5){
//         return true
//     }
//     return "200 OK"
// }
//if you give any type : string, : number, :boolean to func then it 
// throws the error 
// getValue(3)


const getHello = (s: string): string => {
    return "" //if we can't pass this return st. to func then it throws
              // error like :- A function whose declared type is neither 
              //'void' nor 'any' must return a value.
}

const heros = ["thor", "ironman", "spiferman", "hulk"]
// const heros = [1,2,3]

let hero = heros.map((hero) => {
    return `hero is ${hero}`
    // return 1 ---- it also return 1 for every iteration, specially in
    //map() method, To avoid this there is must to declare that callback fn
    // in the map() as any of type for type safety. for ex :- if the array 
    // conataining the strings element, then the func also should return
    // the string values, not any of other type
    // example :- map((hero): string) : this is better syntax
})
console.log(hero);

function consoleError(errMsg: string): void{
    console.log(errMsg);
}
consoleError("syntax error")

// Some functions never returns value
function handleError(msg: string): never{
    throw new Error(msg)
}



export {}