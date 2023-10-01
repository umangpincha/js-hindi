// Array part 2 in Javascript Hindi | chai aur #javascript


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// ... spreads the values
// const allNewHeros = [...marvel_heros , ...dc_heros]
// console.log(allNewHeros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity) //Infinity solves all depth the array has
// console.log(real_another_array[5]);


// console.log(Array.isArray("Hitesh")) //gives bollean values true if array otherwise false
// console.log(Array.from("Hitesh")) //converts into array

// console.log(Array.from({name: "hitesh"})) // interesting , it will give u empty array

let score1 = 100
let score2 = 200
let score3 = 300

// of is used when u want to convert multiple variable to an array
const b = Array.of(score1, score2, score3)
console.log(b);