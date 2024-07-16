const hanoi = (n, fromRod, toRod, auxRod) => {
    if (n === 1) {
        console.log(`${fromRod} --> ${toRod}`);
        return;
    }
    hanoi(n - 1, fromRod, auxRod, toRod);
    console.log(`${fromRod} --> ${toRod}`);
    hanoi(n - 1, auxRod, toRod, fromRod);
};

// เรียกใช้ฟังก์ชัน hanoi โดยส่งค่า n, 'a', 'c', และ 'b'
const n = 3; // เปลี่ยนค่า n ได้ตามต้องการ
hanoi(n, 'a', 'c', 'b');