let y = 100;
let x = 10;
if (x === 10) {
    console.log(y);
}
console.log(y);

let myArrayB1 = [1, 2, 3];
myArrayB1.forEach(element => {
    console.log(element);
});

let myArrayB2 = [1, 2, 3];
for (const iterator of myArrayB2) {
    console.log(iterator);
}

let dog = {
    name: "Yoyo",
    color: "black",
    age: 2
};
for (const k in dog) {
    console.log(k);
}

const numbersOneC1 = [1, 2, 3];
const numbersTwoC1 = [4, 5, numbersOneC1];
console.log(numbersTwoC1);

const numbersOneC2 = [1, 2, 3];
const numbersTwoC2 = [4, 5, ...numbersOneC2];
console.log(numbersTwoC2);
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}

console.log(fun(1, 2, 3, 4));