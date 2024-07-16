var x = 10;
if (x === 10) {
    var y = 100;
    console.log("โปรแกรม A1 ");
    console.log(y); //100
}
console.log(y); //100

var x = 10;
if (x === 10) {
    var y = 100;
    console.log("โปรแกรม A2");
    console.log(y); //100
}
console.log(y); //100

var x = 10;
var y = 100;
if (x === 10) {
    console.log("โปรแกรม A3");
    console.log(y); //100
}
console.log(y); //100

let myArray1 = [1, 2, 3]
console.log("โปรแกรม B1");
myArray1.forEach(element => {
    console.log(element); //1 2 3
});

let myArray2 = [1, 2, 3];
console.log("โปรแกรม B2");
for (const iterator of myArray2) {
    console.log(iterator); //1 2 3
}

let dog = {
    name: "Yoyo",
    color: "black",
    age: 2
}
console.log("โปรแกรม B3");
for (const k in dog) {
    console.log(k); //name color age
}

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, numbersOne];
console.log("โปรแกรม C1");
console.log(numbersTwo) //4 5 -> 1 2 3

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, ...numbers1];
console.log("โปรแกรม C2");
console.log(numbers2) //4 5 1 2 3

function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
let result = fun(1, 2, 3, 4);
console.log(result);