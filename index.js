const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

// WHEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// use inquirer to get answer 
// create new manager instance
// populate new manager instance with inquirer answer
const manager = new Manager()

const teamDataArgs = process.argv.slice(2, process.argv.length);
console.log(teamDataArgs);

// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
//   };
  
//   printProfileData(profileDataArgs);

