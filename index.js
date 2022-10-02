// require inquirer
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template");

// create an empty array list to store employee objects
teamArray = [];

function runApp() {
  // Once called, this function will buildout all the data
  // provided by the other ADD functions
  function createTeam() {
    inquirer
      .createPromptModule([
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
        },
      ])
      .then(function (userInput) {
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
      });
  };
  // gather manager data
  // inquirer prompt
  // then build a manager object
  function addManager() {};

  // gather engineer data
  // inquirer promopt
  // then build an engineer object
  function addEngineer() {};

  // gather intern data
  // inquirer prompt
  // then build an intern object
  function addIntern() {};

  

  // generate the html and write it to a file (This should be built in a separate file)
function htmlbuilder() {
    console.log("Succesfully created Team!");
    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8");
}

createTeam();

}

runApp();