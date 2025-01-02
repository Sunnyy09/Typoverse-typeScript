interface User {
    readonly dbId :number
    name: string,
    email: string,
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string //another way to declare mthd  
    getCoupon(couponName: string, value: number): number
}

//This is why called it interface reopening
interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "learner"
}

const john: Admin = {dbId: 1122, 
    name: "john", 
    role: "admin",
    email: "john@example.com",  
    userId: 2211,
    githubToken: "github2211",
    startTrail: () => {
    return "trail started"
},
getCoupon: (name: "TS50", valueOff = 50) => {
    return 50
}
}

