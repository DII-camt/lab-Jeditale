const students = [
    662110182, 662110183, 662110184, 662110185, 662110186, 662110187,
    662110188, 662110189, 662110190, 662110191, 662110192, 662110193,
    662110194, 662110195, 662110197, 662110198, 662110199, 662110200, 
    662110201, 662110202, 662110203, 662110204, 662110205, 662110265
];

const GroupRandom = (students, n) => {
    //random
    for (let i = students.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [students[i], students[j]] = [students[j], students[i]];
    }

    const groups = [];
    let group = [];
    
    
    for (let i = 0; i < students.length; i++) {
        group.push(students[i]);
        if (group.length === n) {
            groups.push(group);
            group = [];
        }
    }

   
    while (group.length > 0) {
        for (let i = 0; i < groups.length; i++) {
            if (group.length === 0) break;
            if (groups[i].length < n + 1) {
                groups[i].push(group.shift());
            }
        }
    }

    return groups;
};

const member = 4;
const groupedStudents = GroupRandom(students, member);

console.log(groupedStudents);