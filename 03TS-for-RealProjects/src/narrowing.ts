function detectTypes(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}

function provideID(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}

interface User {
    name: string
    email: string
}

interface Admin {
    name: string 
    email: string
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}


// instanceof narrowing

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toLowerCase());
        
    }
}

// ---- using type predicates

type Fish =  {
    swim:() => void
}
type Bird =  {
    fly:() => void
}

function isFish(pet: Fish | Bird){
    return (pet as Fish).swim !== undefined // return the boolean value
}

function getFood(pet : Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}


// Disciminated unions

// interface Shape{
//     type: "circle" | "rectangle"
//     radius?: number
//     sideLength?: number
// }

interface Circle {
    kind: "circle"
    radius: number
}
interface Square{
    kind: "square"
    side: number
}
interface Rectange {
    kind: "rectangle"
    length: number
    width: number
}

type Shape = Circle | Square // for future purpose, you add Rectangle to it

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    return shape.side ** 2
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle": 
            return Math.PI * shape.radius ** 2 
        case "square": 
            return shape.side ** 2

        default: 
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}