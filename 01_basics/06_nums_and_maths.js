const score = 400
console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);


// console.log(balance.toFixed(2));

// let otherNumber = 23.8923
// console.log(otherNumber.toPrecision(3));


// let hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));



// +++++++++++++++++++++++++Maths+++++++++++++++++++++++++++


// console.log(Math.abs(4));
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.sqrt(25));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

//Math.random gives number greater than an equal to 0 and less than 1 
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


// if min =10 and max=20 then the value 
// (Math.floor(Math.random()*(max-min +1)) )  => ensure that it will give value 
// in the range [0,10] ..You have said 1 is added to avoid 0 but basically 1 is 
// added to increase the range upto (10) ..if we will not add 1 it will 
// give value in the range [0,9] .

