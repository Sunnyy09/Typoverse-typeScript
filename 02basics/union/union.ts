let score: number | string = 33 // union type
score = 44
score = "55"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let john: User | Admin = {name: "John doe", id: 12}
john = {username: "john admin", id: 12}

// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is ${id}`); 
// }
getDbId("3")
getDbId(3)

// function getDbId(id: number | string){
//     id.toLowerCase() ---- it gives the error, checkout next one
// }

function getDbId(id: number | string){
    if(typeof id === "string") id.toLowerCase()
    if(typeof id === "number") id.toString()
    // it reduces the error given above
}

// Arrays

const data: number[] = [1,2,3,4,5]
const data2: string[] = ["1", "2", "3"]
const data3: string[] | number[] = ["1", "2", "3"]
//In this array, either it all the numbers or either 
// it all the strings !! Not mixed matched

// To encounter this
// const data4: (string | number)[] = [1, 2, 3, "4", "5"] // now it can mixed

// (string | number | boolean)[] ---- or ----
// const data5: any[] = [1, 2, "3", "4", true, false]

let pi: 3.14 = 3.14
// pi = 3.15  // Type '3.15' is not assignable to type '3.14'
//let's see usefull  case scenario for pi

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" //Type '"crew"' is not assignable to type '"aisle" | 
// "middle" | "window"'