const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Template = require("./src/template");

// Add the team members into an array
let teamMembers = {
    manager: "",
    engineers: [],
    interns: []
};

// Prompts for all type of employees
const empPrompts = [
    {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter employee\'s ID ='
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Please enter employee\'s email address ='
    }
];

// Prompt if to add more team members
const newEmpPrompt = {
    type: 'list',
    name: 'addMore',
    message: 'Please choose to add an engineer, intern, or finish to be done building your team',
    choices: ['Engineer', 'Intern', '..Finish'],
    default: '..Finish'
}

// Prompts for the manager information
const mgrPrompts = [
    {
        type: 'input',
        name: 'mgrName',
        message: 'Please enter the team\'s manager name ='
    },
        // Copies the employee prompts [empPrompts] and adds
        // the questions as if they were declare locally
        ...empPrompts,
    {
        type: 'input',
        name: 'mrgOffice',
        message: 'Please enter employee\'s office number ='
    }
];

// Prompts for the engineers information
const engPrompts = [
    {
        type: 'input',
        name: 'engName',
        message: 'Please enter the engineer\'s name ='
    },
        // Copies the employee prompts [empPrompts] and adds
        // the questions as if they were declare locally
        ...empPrompts,
    {
        type: 'input',
        name: 'engGithub',
        message: 'Please enter the engineer\'s Github username ='
    }
];

// Prompts for the interns information
const intPrompts = [
    {
        type: 'input',
        name: 'intName',
        message: 'Please enter the intern\'s name ='
    },
        // Copies the employee prompts [empPrompts] and adds
        // the questions as if they were declare locally
        ...empPrompts,
    {
        type: 'input',
        name: 'intSchool',
        message: 'Please enter the intern\'s school ='
    }
];

// Function which prompts the user with various question
// depending on the answer choices
function init(prompts) {
    
    inquirer
    .prompt(prompts)
    .then((response) => {
        
        // Check if the response if manager, engineer, or intern
        if (response.hasOwnProperty("mrgOffice")) {
            
            // Saves the response into local variables
            const mgrId = response.employeeId;
            const mgrName = response.mgrName;
            const mgrEmail = response.employeeEmail;
            const mgrOffice = response.mrgOffice
            
            // Sets the employee role
            response.role = "Manager";

            // Initiate a new Manager class
            const newManager = new Manager(mgrId, mgrName, mgrEmail, mgrOffice);

            // Adds the manager data into the array, with JSON stringify
            teamMembers.manager = JSON.stringify(newManager);
        }
        else if (response.hasOwnProperty("engGithub")) {

            // Saves the response into local variables
            const engId = response.employeeId;
            const engName = response.engName;
            const engEmail = response.employeeEmail;
            const engGithub = response.engGithub;
            
            // Sets the employee role
            response.role = "Engineer";

            // Initiate a new Engineer class
            const newEngineer = new Engineer(engId, engName, engEmail, engGithub);

            // Adds the engineers data into the array
            teamMembers.engineers.push(newEngineer);
        }
        else if (response.hasOwnProperty("intSchool")) {

            // Saves the response into local variables
            const intId = response.employeeId;
            const intName = response.intName;
            const intEmail = response.employeeEmail;
            const intSchool = response.intSchool;

            // Sets the employee role
            response.role = "Intern";

            // Initiate a new Intern class
            const newIntern = new Intern(intId, intName, intEmail, intSchool);

            // Adds the interns data into the array
            teamMembers.interns.push(newIntern);
        }

        // Switch case to check if to add engineers or interns prompts
        // ask the user again or be done with building the team members
        switch (response.addMore) {
            case "Engineer":
                init(engPrompts);
                break;
            case "Intern":
                init(intPrompts);
                break;
            case "..Finish":
                generateHtml();
                break;
            default:
                init(newEmpPrompt);
        }
    });
}

// Function to generate the index.html to display
function generateHtml() {
    const newTemplate = new Template(teamMembers);
    newTemplate.generateWeb();
}

// Call to initialize app when starting the
// first time, with the prompts for manager
init(mgrPrompts);