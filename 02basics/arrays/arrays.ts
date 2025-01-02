// const heros = ["hulk", "ironman", "spiderman", "thor"]

const superHeros: string[] = []
superHeros.push("spiderman")
console.log(superHeros)

// const heroPower: number[] = []
const heroPower: Array<number> = [] //another way to declare array
heroPower.push(100)
console.log(heroPower)

type User = {
    name: string
    email: string
    isActive: boolean
}

const allUsers: User[] = []
allUsers.push({name: "John Doe", email: "john@example.com", isActive: false})
console.log(allUsers);

// one more way
const MLModels: number[][] = [
    [255,255,255],
    []
]

export {}