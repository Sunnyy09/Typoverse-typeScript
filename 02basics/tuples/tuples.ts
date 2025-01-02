// const user: (string | number)[] = [1, "abc"]
let user: [string, number, boolean]

user = ["abc", 12, true]
// user = [true, 12, "abc"] ---- we can't reverse this because we need to 
                                //  follow the order as mentioned


let rgb: [number, number, number] = [255, 144, 166] 

type User = [number, string]
const newUser: User = [112, " john@example.com"]
newUser[1] = "maxi@example.com"




export {}