
// NOTE : Don't ever try ot do these type of conversions in production , clean code is always prefered 

// console.log("2" > 1);
// console.log("02" > 1);



// Equaliity (==) , comparision (> , < , >= , <=) work differently .
// Comparision converst null to a number treating it as 0 
console.log(null > 0); // false
console.log(null == 0); // false(equality operator thatsy false)
console.log(null >= 0); // true


// undefined always gives "false" as output
// console.log(undefined > 0);
// console.log(undefined == 0); 
// console.log(undefined >= 0); 

console.log("2" == 2); //true
console.log("2" === 2); //false