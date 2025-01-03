// const OrderStatus = Object.freeze({ // Object.freeze() to make it immutable.
//     PENDING: "Pending",
//     PROCESSING: "Processing",
//     SHIPPED: "Shipped",
//     DELIVERED: "Delivered",
//     CANCELLED: "Cancelled"
// })

// function getOrderStatusMessage(status: string): string{
//     switch(status){
//         case OrderStatus.PENDING: 
//             return 'Your order is Pending.';
//         case OrderStatus.PROCESSING:
//             return "Your order is being processing."
//         case OrderStatus.SHIPPED:
//             return "Your order has been shipped";
//         case OrderStatus.DELIVERED:
//             return "Your order has been delivered"
//         case OrderStatus.CANCELLED:
//             return "Your order has been canceled";
//         default:
//             return "Invalid order status"
//     }
// }

// console.log(getOrderStatusMessage(OrderStatus.PENDING));

// Enum with Custom Values

enum HttpStatus {
    OK = 200,
    CREATED = 201,
    BADREQUEST = 400,
    UNAUTHORIZED = 401,
    NOTFOUND = 404
}

function getNumericStatusCode(code: number): HttpStatus | string{
    switch(code){
        case HttpStatus.OK:
            return "Status returns with 200"
        case HttpStatus.CREATED:
            return "Status returns with 201";
        case HttpStatus.BADREQUEST:
            return "Status returns with 400";
        case HttpStatus.UNAUTHORIZED:
            return "Status returns with 401";
        case HttpStatus.NOTFOUND:
            return "Status return with 404";
        default:
            return "Unknown status"
    }
}
console.log(getNumericStatusCode(HttpStatus.CREATED));

// Enum as Object

enum Planets {
    Mercury = "Mercury",
    Venus = "Venus",
    Earth = "Earth",
    Mars = "Mars"
}

function getPlanetDistance(planet) {
    const distances = {
      [Planets.Mercury]: 57.9,
      [Planets.Venus]: 108.2,
      [Planets.Earth]: 149.6,
      [Planets.Mars]: 227.9
    };
  
    return distances[planet] || 'Planet not found';
  }
console.log(getPlanetDistance(Planets.Earth));
console.log(getPlanetDistance("Jupiter"));

// Reverse Mapping

enum Colors {
    Red=1,
    Green=2,
    Blue=3
}

function demonstrateReverseMapping(){
    const redKey = Colors[1]
    console.log(`Key for Value 1: ${redKey}`);

    const greenKey = Colors[2]
    console.log(`Key for value 2: ${greenKey}`);

    const blueValue = Colors.Blue
    console.log(`Value for Blue: ${blueValue}`);

}
// demonstrateReverseMapping()

//  Enum Type Narrowing

enum Roles {
    Admin = "Admin",
  User = "User",
  Guest = "Guest"
}

function getRolePermissions(role: Roles): string[]{
    switch (role) {
        case Roles.Admin:
          return ["read", "write", "delete"];
        case Roles.User:
          return ["read", "write"];
        case Roles.Guest:
          return ["read"];
        default:
          return [];
      }
}
// console.log(getRolePermissions(Roles.Admin));
// console.log(getRolePermissions(Roles.User));


// Enum with Union Types
// Enum to define the payment methods
enum PaymentMethod {
    CreditCard = 'CreditCard',
    PayPal = 'PayPal',
    BankTransfer = 'BankTransfer'
  }
  
  type PaymentDetails = 
    | { method: PaymentMethod.CreditCard; cardNumber: string; expiryDate: string }
    | { method: PaymentMethod.PayPal; email: string }
    | { method: PaymentMethod.BankTransfer; accountNumber: string; bankName: string };
  
  
// Enum in a Class

enum Season {
    Spring = "Spring",
    Summer = "Summer",
    Autumn = "Autumn",
    Winter = "Winter"
}

class WeatherReport {

    season: Season;
    temperature: number

    constructor(season: Season, temp: number){
        this.season = season;
        this.temperature = temp
    }

    getSummary(): string{
        return `It's ${this.season}, and the temp is ${this.temperature}°C.`
    }
}

const report = new WeatherReport(Season.Winter, 5)
console.log(report.getSummary());


export {}