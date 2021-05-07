const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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

const newEmpPrompt = {
    type: 'list',
    name: 'roleAction',
    message: 'Please choose to add an engineer, intern, or choose finish to be done building your team',
    choices: ['Engineer', 'Intern', '..Finish'],
    default: '..Finish'
}

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
    },
        // Copies the new employee prompts [newEmpPrompt] and
        // adds the questions as if they were declare locally
        newEmpPrompt    
];

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
    },
        // Copies the new employee prompts [newEmpPrompt] and
        // adds the questions as if they were declare locally
        newEmpPrompt
];

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
        message: 'Please enter the engineer\'s school ='
    },
        // Copies the new employee prompts [newEmpPrompt] and
        // adds the questions as if they were declare locally
        newEmpPrompt
];

function init(prompts) {
    
    inquirer
    .prompt(prompts)
    .then((response) => {
        
        if (response.hasOwnProperty("mrgOffice") && (response.roleAction == "..Finish")) {
            response.roleAction = "Manager";
        }
        else if (response.hasOwnProperty("engGithub") && (response.roleAction == "..Finish")) {
            response.roleAction = "Engineer";
        }
        else if (response.hasOwnProperty("intSchool") ) {
            response.roleAction = "Intern";
        }
        else {
            response.roleAction = "N/A";
        }

        console.log(response.roleAction);
        switch (response.roleAction) {
            case "Engineer":
                call(init(engPrompts));
            case "Intern":
                call(init(intPrompts));
        }
        console.log(response);
    });
}

function generateHtml() {
    return 0;
}

// Call to initialize app when starting the
// first time, with the prompts for manager
init(mgrPrompts);