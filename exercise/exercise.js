let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
];
console.log(input)

// EJ 1
const array1 = input.map((user) => user.name);
console.log("Exercise 1", array1);

// EJ 2
let array2 = input.filter(person => person.age > 20 && person.age < 29).map(person => person.name);
console.log("Exercise 2", array2);

// EJ 3
const countries = [
    { name: 'Argentina', population: 5 },
    { name: 'Brazil', population: 6 },
    { name: 'Mexico', population: 3 },
    { name: 'Canada', population: 2 },
];
countries.sort((a, b) => b.population - a.population);
console.log("Exercise 3", countries);

// EJ 4
candles = [4, 4, 1, 3];
const max = Math.max(...candles);
let tallCandles = candles.filter((candle) => candle == max).length;
console.log("Exercise 4", tallCandles);

// EJ 5
const minimunAttendance = 3;
const student = [0, 0, 0, 0, 1, 1, 1];

const presentStudents = student.filter((isPresent) => isPresent <= 0);

if (presentStudents.length < minimunAttendance) {
    console.log("Exercise 5 YES (suspende)");
}
else {
    console.log("Exercise 5 NO (no suspende)");
}