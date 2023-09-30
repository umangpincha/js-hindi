let myDate = new Date();
// console.log(myDate.getDate());
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
console.log(myDate.getMonth()); //month starts with 0 i.e jan = 0

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString());

// to convert myCreatedDate to millisec
console.log(myCreatedDate.getTime())


// Direct time in millisec
// let myTime = Date.now()
// console.log(myTime);
//convert millisec to sec /1000

let myTime = Math.floor(Date.now()/1000)
console.log(myTime);