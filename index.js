const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Template = require("./src/template");

let teamMembers = {
    manager: "",
    engineers: [],
    interns: []
};

let empPrompts = [
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
    name: 'addMore',
    message: 'Please choose to add an engineer, intern, or finish to be done building your team',
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
    }
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
    }
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
        message: 'Please enter the intern\'s school ='
    }
];

function init(prompts) {
    
    inquirer
    .prompt(prompts)
    .then((response) => {
        
        if (response.hasOwnProperty("mrgOffice")) {
            
            const mgrId = response.employeeId;
            const mgrName = response.mgrName;
            const mgrEmail = response.employeeEmail;
            const mgrOffice = response.mrgOffice
            
            response.role = "Manager";

            const newManager = new Manager(mgrId, mgrName, mgrEmail, mgrOffice);

            teamMembers.manager = JSON.stringify(newManager);
        }
        else if (response.hasOwnProperty("engGithub")) {
            const engId = response.employeeId;
            const engName = response.engName;
            const engEmail = response.employeeEmail;
            const engGithub = response.engGithub;
            
            response.role = "Engineer";

            const newEngineer = new Engineer(engId, engName, engEmail, engGithub);

            teamMembers.engineers.push(newEngineer);
        }
        else if (response.hasOwnProperty("intSchool")) {
            const intId = response.employeeId;
            const intName = response.intName;
            const intEmail = response.employeeEmail;
            const intSchool = response.intSchool;

            response.role = "Intern";

            const newIntern = new Intern(intId, intName, intEmail, intSchool);

            teamMembers.interns.push(newIntern);
        }

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

function generateHtml() {
    const newTemplate = new Template(teamMembers);
    newTemplate.generateWeb();
}

// Call to initialize app when starting the
// first time, with the prompts for manager
init(mgrPrompts);