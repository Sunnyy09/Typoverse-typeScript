const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

function identityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: string
    type: number
}

// identityFour<Bottle>({})

// ---- Genrics in Array and Functions

function getSearchProducts<T>(products: Array<T> | T[]): T{
    //do some database operations
    const myIndex = 3 
    return products[myIndex]
}
// Convert this func into an array func

const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 9
    return products[myIndex]
}

// <T,> :- its not the jsx tag, its also the generic syntax
//         specially used in jsx to indicate that its not the tag like <h1>



// Using type parameters in generics constraints

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunc<T, U extends Database>(valOne: T, valTwo: U): object{
    return {
        valOne,
        valTwo
    }
}

anotherFunc(3, {connection: "yes", username: "john doe", password: "hvasuidxgasbu"})


// Using Class Types in Generics

interface Quiz {
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}