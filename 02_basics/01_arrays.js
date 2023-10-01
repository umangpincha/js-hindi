// 2 ways to declare array
const myArr = [10,9,3,31,45]
// const myArr2 = new Array(90,78,34)
// console.log(myArr[0]);
// console.log(myArr2[0]);


//Array Methods
// myArr.push(10)
// myArr.push(11)
// console.log(myArr);
// myArr.pop() //deletes last element
// console.log(myArr);

// myArr.unshift(90) // add element at starting of array
// console.log(myArr);
// myArr.shift() //removes 1st element
// console.log(myArr);
// console.log(myArr.includes(90));
// console.log(myArr.indexOf(90));
// console.log(typeof myArr.join());


//slice , splice
console.log(myArr)
console.log(myArr.slice(1,3)) //prints from 1-2 , here 3 is excluded
console.log(myArr.splice(1,3)) //splice take portion starting from 1 to 3
// and changes original array 
console.log(myArr)

