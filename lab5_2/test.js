console.log("โปรแกรม A1");
const vehicles = ['mustang', 'f-150', 'expedition'];
const [a, , b] = vehicles;
console.log(vehicles);
console.log(a);
console.log(b);

console.log("โปรแกรม A2");
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}
console.log(vehicleOne.color); // red
console.log(vehicleOne["color"]); // red
console.log(vehicleOne["color "]); // undefined

console.log("โปรแกรม A3");
const vehicle1 = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}
const { type, color, brand, model } = vehicle1;
console.log(type);
console.log(color);
console.log(brand);
console.log(model);

console.log("โปรแกรม A4");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop()); // mango