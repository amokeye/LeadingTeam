// Packages
const fs = require('fs');
const inquirer = require('inquirer');

// Paths for summary files and constructor function(s)
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Empty team array
const team = [];

// Team card content
const generateHTML = require('./src/page-template');

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
                name: 'Email',
                type: 'input',
                message: 'Please enter manager email.',
            },

            {
                name: 'IDname',
                type: 'input',
                message: 'Please enter manager ID number.',
            },

            {
                name: 'officeNumber',
                type: 'input',
                message: 'Please enter office number for manager.',
            },
        ]
    )
    
    .then(data => {
        const manager = new Manager(data.Name, data.Email, data.IDname, data.officeNumber);
        team.push(manager);

        // Confirm if any additional employees are being added and publish them accordingly
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
        const engineer = new Engineer(data.Name, data.IDname, data.Email, data.Github);
        team.push(engineer);

        // Confirm if any additional employees are being added and publish them accordingly
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
        const intern = new Intern(data.Name, data.IDname, data.Email, data.School);
        team.push(intern);

        // Confirm if any additional employees are being added and publish them accordingly
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
                // Variable for generateHTML function that grab/order employee data as cards
                const htmlString = generateHTML(team);

                // Write team data to index.html file
                fs.writeFile('./output/index.html', htmlString, function (err) {
                    if (err) throw err;
                });

        }


    })
};