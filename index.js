// Packages
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// Paths for summary files and constructor function(s)
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Empty team array
const team = [];
//const fullTeam = ``;

// Content
const buildHTML = require('./src/page-template');
let HTMLpage = buildHTML.generateHTML;

// Function for generating manager
function generateManager() {
    inquirer.prompt(
        [
            {        
                name: 'Name',
                type: 'input',
                message: 'Please enter the full name of the manager.',
            },

            {
                name: 'IDname',
                type: 'input',
                message: 'Please enter manager ID number.',
            },

            {
                name: 'Email',
                type: 'input',
                message: 'Please enter manager email.',
            },

            {
                name: 'officeNumber',
                type: 'input',
                message: 'Please enter office number for manager.',
            },
        ]
    )
    
    .then(data => {
        console.log(data);
        const manager = new Manager(data.Name, data.IDname, data.Email, data.officeNumber);
        team.push(manager);

        // Call next function
        generateTeam();
    })
}

generateManager();


// Function for generating engineer
function generateEngineer() {
    inquirer.prompt(
        [
            {        
                name: 'Name',
                type: 'input',
                message: 'Please enter the full name of the engineer.',
            },

            {
                name: 'IDname',
                type: 'input',
                message: 'Please enter engineer ID number.',
            },

            {
                name: 'Email',
                type: 'input',
                message: 'Please enter engineer email.',
            },

            {
                name: 'Github',
                type: 'input',
                message: 'Please enter Github ID for engineer.',
            },
        ]
    )

    .then(data => {
        console.log(data);
        const engineer = new Engineer(data.Name, data.IDname, data.Email, data.Github);
        team.push(engineer);

        // Call next function
        generateTeam();
    })
}



// Function for generating Intern
function generateIntern() {
    inquirer.prompt(
        [
            {        
                name: 'Name',
                type: 'input',
                message: 'Please enter the full name of the intern.',
            },

            {
                name: 'IDname',
                type: 'input',
                message: 'Please enter intern ID number.',
            },

            {
                name: 'Email',
                type: 'input',
                message: 'Please enter intern email.',
            },

            {
                name: 'School',
                type: 'input',
                message: 'Please enter school attended by intern.',
            },
        ]
    )
    
    .then(data => {
        console.log(data);
        const intern = new Intern(data.Name, data.IDname, data.Email, data.School);
        team.push(intern);

        // Call next function
        generateTeam();
    })
}

// Function for generating team
function generateTeam() {
    inquirer.prompt(
        [
            {
                name: 'Role',
                type: 'list',
                message: 'Select the role of the employee.',
                choices: [
                    'Engineer',
                    'Intern',
                    'No more employees to add.',
                ]
            },
        ]
    )

    .then(data => {
        switch(data.Role) {
            case "Engineer":
                // Call generateEngineer function
                generateEngineer();
                break;
            
            case "Intern":
                // Call generateIntern function
                generateIntern();
                break;
            
            default: 
                // Call buildHTML function to grab/order employee data
                //const Summaries = generateHTML(fullTeam);
                buildHTML(HTMLpage);

                // function writeToFile(fileName, data) {
                //     fs.writeFileSync(path.join(process.cwd(), fileName), data);
                // }

                // Write team data to HTML file
                fs.writeFile('./output/index.html', HTMLpage, function (err) {
                    if (err) throw err;
                });

        }
    })
};