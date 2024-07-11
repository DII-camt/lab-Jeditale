const students = [
    662110182, 662110183, 662110184, 662110185, 662110186, 662110187,
    662110188, 662110189, 662110190, 662110191, 662110192, 662110193,
    662110194, 662110195, 662110196, 662110197, 662110198, 662110199,
    662110200, 662110201, 662110202, 662110203, 662110204, 662110205,
    662110265
  ];
  
  // Helper function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const GroupRandom = (students, n) => {
    // Shuffle students to ensure randomness
    const shuffledStudents = shuffleArray([...students]);
  
    // Create initial groups
    const groups = [];
    for (let i = 0; i < shuffledStudents.length; i += n) {
      groups.push(shuffledStudents.slice(i, i + n));
    }
  
    // Distribute remaining students
    const remainingStudents = groups.pop();
    if (remainingStudents.length > 0) {
      let i = 0;
      while (remainingStudents.length > 0) {
        if (groups[i].length < n + 1) {
          groups[i].push(remainingStudents.shift());
        }
        i = (i + 1) % groups.length;
      }
    }
  
    return groups;
  };
  
  const n = 4;
  const groupedStudents = GroupRandom(students, n);
  console.log(groupedStudents);
  