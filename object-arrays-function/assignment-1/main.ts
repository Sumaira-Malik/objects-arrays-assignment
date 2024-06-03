// ----------------------Assignment 1: Building Your Friend List--------------------------


// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.


type Friend = {
    firstName: string;
    lastName: string;
    id: number;
}
const people = {
    friends: [] as Friend[]
}
const friend1:Friend = {
    firstName: "sana",
    lastName: "islam",
    id: 102,
};
const friend2:Friend = {
    firstName: "rida",
    lastName: "islam",
    id: 103,
};
const friend3:Friend = {
    firstName: "farhana",
    lastName: "israr",
    id: 104,
};
people.friends.push(friend1,friend2,friend3);
console.log(people);
