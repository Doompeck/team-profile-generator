// require inquirer
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template");

// create an empty array list to store employee objects
teamArray = [];

function runApp() {
  // CreateTeam is the main menu prompt loop to keep you in the app until you have added all the employees you need.
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No new team members needed.",
          ],
        }
      ])
      .then(function(userInput) {
        switch (userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;

          default:
            htmlbuilder();
        }
      })
  }
  // gather manager data
  // inquirer prompt
  // then build a manager object
  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's employee ID?",
        },
        {
          type: "Input",
          name: "managerEmail",
          message: "What is the manger's email?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?",
        }
      ])
      .then(answers => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        createTeam();
      });
  }

  // gather engineer data
  // inquirer promopt
  // then build an engineer object
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's employee ID number?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's Github username?",
        },
      ])
      .then(answers => {
        const engineer = new Engineer(
          answers.egineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        createTeam();
      });
  }

  // gather intern data
  // inquirer prompt
  // then build an intern object
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's employee ID number?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?",
        },
      ])
      .then(answers => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        createTeam();
      });
  }

  // generate the html and write it to a file (This should be built in a separate file)
  function htmlbuilder() {
    console.log("Succesfully created Team!");
    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");
  }

  createTeam();
}

runApp();
