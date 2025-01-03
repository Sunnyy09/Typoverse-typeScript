"use strict";
// const OrderStatus = Object.freeze({ // Object.freeze() to make it immutable.
//     PENDING: "Pending",
//     PROCESSING: "Processing",
//     SHIPPED: "Shipped",
//     DELIVERED: "Delivered",
//     CANCELLED: "Cancelled"
// })
Object.defineProperty(exports, "__esModule", { value: true });
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
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
    HttpStatus[HttpStatus["BADREQUEST"] = 400] = "BADREQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["NOTFOUND"] = 404] = "NOTFOUND";
})(HttpStatus || (HttpStatus = {}));
function getNumericStatusCode(code) {
    switch (code) {
        case HttpStatus.OK:
            return "Status returns with 200";
        case HttpStatus.CREATED:
            return "Status returns with 201";
        case HttpStatus.BADREQUEST:
            return "Status returns with 400";
        case HttpStatus.UNAUTHORIZED:
            return "Status returns with 401";
        case HttpStatus.NOTFOUND:
            return "Status return with 404";
        default:
            return "Unknown status";
    }
}
console.log(getNumericStatusCode(HttpStatus.CREATED));
// Enum as Object
var Planets;
(function (Planets) {
    Planets["Mercury"] = "Mercury";
    Planets["Venus"] = "Venus";
    Planets["Earth"] = "Earth";
    Planets["Mars"] = "Mars";
})(Planets || (Planets = {}));
function getPlanetDistance(planet) {
    var _a;
    var distances = (_a = {},
        _a[Planets.Mercury] = 57.9,
        _a[Planets.Venus] = 108.2,
        _a[Planets.Earth] = 149.6,
        _a[Planets.Mars] = 227.9,
        _a);
    return distances[planet] || 'Planet not found';
}
console.log(getPlanetDistance(Planets.Earth));
console.log(getPlanetDistance("Jupiter"));
// Reverse Mapping
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
function demonstrateReverseMapping() {
    var redKey = Colors[1];
    console.log("Key for Value 1: ".concat(redKey));
    var greenKey = Colors[2];
    console.log("Key for value 2: ".concat(greenKey));
    var blueValue = Colors.Blue;
    console.log("Value for Blue: ".concat(blueValue));
}
// demonstrateReverseMapping()
//  Enum Type Narrowing
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["User"] = "User";
    Roles["Guest"] = "Guest";
})(Roles || (Roles = {}));
function getRolePermissions(role) {
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
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CreditCard"] = "CreditCard";
    PaymentMethod["PayPal"] = "PayPal";
    PaymentMethod["BankTransfer"] = "BankTransfer";
})(PaymentMethod || (PaymentMethod = {}));
// Enum in a Class
var Season;
(function (Season) {
    Season["Spring"] = "Spring";
    Season["Summer"] = "Summer";
    Season["Autumn"] = "Autumn";
    Season["Winter"] = "Winter";
})(Season || (Season = {}));
var WeatherReport = /** @class */ (function () {
    function WeatherReport(season, temp) {
        this.season = season;
        this.temperature = temp;
    }
    WeatherReport.prototype.getSummary = function () {
        return "It's ".concat(this.season, ", and the temp is ").concat(this.temperature, "\u00B0C.");
    };
    return WeatherReport;
}());
var report = new WeatherReport(Season.Winter, 5);
console.log(report.getSummary());
