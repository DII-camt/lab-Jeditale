const letters = ["A", "B", "C", "D"];
const output = letters.join(" and ");
console.log(output); // Output: "A and B and C and D"

const letter1 = ["A", "B", "C", "D"];
const letter2 = ["A", "B", "C", "D"];
const combined = letter1.concat(letter2);
console.log(combined); // Output: ["A", "B", "C", "D", "A", "B", "C", "D"]

const letter3 = ["A", "B", "C", "D"];
letter3.push("G");
console.log(letter3); // Output: ["A", "B", "C", "D", "G"]