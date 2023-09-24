const accountId = 1234
let accountEmail = "up@up"
var accountPassword = "test@123"
let accountState;
// accountId = 4 // not allowed

accountEmail = "abc@abc";
accountPassword = 789;

// console.log(accountEmail);
console.table([accountId , accountEmail , accountPassword , accountState])