const hanoi = (n, from, to, aux) => {
    if (n === 0) return;
    hanoi(n - 1, from, aux, to);
    console.log(`${from} --> ${to}`);
    hanoi(n - 1, aux, to, from);
};

// Test the function with 3 disks
hanoi(3, 'A', 'C', 'B');
