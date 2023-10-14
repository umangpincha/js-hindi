//How to iterate objects
// Ans for in
const myObject = {
    1: "one",
    2: "two",
    3: "three",
}


for (const [key , value] in myObject) {
    console.log(`key : ${key} , value: ${myObject[key]} `);
}


const myArr = [1,2,3,4]
for (const key in myArr) {
    console.log(myArr[key]);
}


// Conclusion :
// Objects : for in
// map : for of


