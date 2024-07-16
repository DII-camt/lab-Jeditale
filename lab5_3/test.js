// หาค่า 2 ยกกำลัง 100
const result1 = Math.pow(2, 100);
console.log("2 ยกกำลัง 100 =", result1);

// หาค่าพื้นที่วงกลม
const radius = 1000;
const area = Math.PI * Math.pow(radius, 2);
console.log("พื้นที่วงกลมที่มีรัศมี 1000 =", area);

function randomX() {
    return Math.random() * (2 - (-1)) + (-1);
}

// ทดลองเรียกใช้ฟังก์ชัน
const x = randomX();
console.log("ค่าสุ่มของ x:", x);