// --------------------------------------Assignment 4: Student List Organizer---------------------------------------


// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

import chalk from "chalk";

type Student = {
  name: string;
  isSenior: boolean;
  hasCompletedAssignments: boolean;
};

let students: Student[] = [
  { name: "Fatima", isSenior: true, hasCompletedAssignments: true },
  { name: "Unzila", isSenior: false, hasCompletedAssignments: false },
  { name: "Sk-afridi", isSenior: true, hasCompletedAssignments: true },
  { name: "Asma", isSenior: false, hasCompletedAssignments: false },
  { name: "Farhana", isSenior: true, hasCompletedAssignments: true },
  { name: "Rukhsana", isSenior: false, hasCompletedAssignments: false },
  { name: "Nida", isSenior: true, hasCompletedAssignments: true },
  { name: "Hania", isSenior: false, hasCompletedAssignments: false },
];

console.log(chalk.green("\n  Students list :"), students, "\n ");

function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
  return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}

const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log(chalk.blue("\n Senior Students with Assignments :"), seniorStudentsWithAssignments, "\n");

function removeIncompleteAssignments(students: Student[]): Student[] {
  return students.filter(student => student.hasCompletedAssignments);
}

const updatedClassList = removeIncompleteAssignments(students);
console.log(chalk.green("Students with completed assignments :"), updatedClassList);


  console.log(chalk.magenta(`Congratulations! Yor are very hard-working students. Keep it up!`));
  console.log(chalk.italic('\n \t Fatima, Sk-afridi, Farhana, Nida \t \n'));



function findStudentsWithIncompleteAssignments(students: Student[]): Student[] {
  return students.filter(student => !student.hasCompletedAssignments);
}

const studentsWithIncompleteAssignments = findStudentsWithIncompleteAssignments(students);
console.log(chalk.red("Students with Incomplete Assignments :"), studentsWithIncompleteAssignments);

console.log(chalk.red(`Warning! Dear student, kindly complete your assignment on time; otherwise, you will not be qualified for this course!`));
console.log(chalk.italic('\n \t Unzila, Asma, Hania, Rukhsana \n \t'));

