const inquirer = require("inquirer");
const mysql = require("mysql");
const figlet = require("figlet");

async function fancyFigs() {
    console.log(figlet.textSync("Awesome", {
        font: "big money-ne",
        horizontalLayout: "default",
        verticalLayout: "default"
    }));
    console.log(figlet.textSync("Employee", {
        font: "big money-ne",
        horizontalLayout: "default",
        verticalLayout: "default"
    }));
    console.log(figlet.textSync("Tracker", {
        font: "big money-ne",
        horizontalLayout: "default",
        verticalLayout: "default"
    }));
};

fancyFigs();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'company_db',
    password: 'Password'
})

connection.connect(function (err) {
    if (err) throw err
    start()
})

function start() {
    inquirer
        .prompt({
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'Add Employee',
                'Delete Employee',
                'View All Employees',
                'View Department',
                'View Employee by Role',
                'EXIT']
        })
        .then(function (answer) {
            console.log(answer)
            switch (answer.choices) {
                case 'Add Employee':
                    addEmployee()
                    break
                case 'Delete Employee':
                    deleteEmployee()
                    break
                case 'View All Employees':
                    employeeSearch()
                    break
                case 'View Department':
                    departmentSearch()
                    break
                case 'View Employee by Role':
                    roleSearch()
                    break
                case 'EXIT':
                    connection.end()
                    break
            }
        })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter First Name: ",
            name: "first_name"
        },
        {
            type: "input",
            message: "Enter Last Name: ",
            name: "last_name"
        },
        {
            type: "input",
            message: "Enter Salary: ",
            name: "salary"
        },
        {
            type: "input",
            message: "Enter Role ID: ",
            name: "role_id"
        }

    ])
        .then(answer => {
            const query = `INSERT INTO employee (first_name, last_name, salary, role_id) VALUE ("${answer.first_name}", "${answer.last_name}", "${answer.salary}", "${answer.role_id}")`
            connection.query(query, function (err, res) {
                if (err) throw err
                console.log(res)
                start()
            })
        })
}

function employeeSearch() {
    var query = 'SELECT * FROM employee'

    connection.query(query, function (err, res) {
        if (err) throw err
        console.table(res)
        start()
    })
}

function viewDepartment() {
    connection.query('SELECT * FROM department', function (err, res) {
        if (err) throw err
        console.table(res)
        start()
    })
}

function departmentSearch() {
    inquirer
        .prompt({
            type: 'list',
            name: 'choices',
            message: 'View Department?',
            choices: ['Service Department',
                'Production Department',
                'Sales Department']
        })
        .then(function (answer) {
            connection.query(`SELECT * FROM department WHERE name = "${answer.choices}"`, function (err, res) {
                if (err) throw err
                console.table(res)
                start()
            })
        })
}

function viewRole() {
    connection.query('SELECT * FROM role_id', function (err, res) {
        if (err) throw err
        console.table(res)
        start()
    })
}

function roleSearch() {
    inquirer
        .prompt({
            type: 'list',
            name: 'choices',
            message: 'View Role?',
            choices: ['Manager',
                'Supervisor',
                'Foreman',
                'Crew Member']
        })
        .then(function (answer) {
            connection.query(`SELECT * FROM role_id WHERE name = "${answer.choices}"`, function (err, res) {
                if (err) throw err
                console.table(res)
                start()
            })
        })
}