const inquirer = require("inquirer");
const mysql = require("mysql");
const figlet = require("figlet");

async function fancyFigs(){
    console.log(figlet.textSync("Awesome", {
        font: "standard",
        horizontalLayout: "default",
        verticalLayout: "default"
    }))
    console.log(figlet.textSync("Employee", {
        font: "standard",
        horizontalLayout: "default",
        verticalLayout: "default"
    }))
    console.log(figlet.textSync("Tracker", {
        font: "standard",
        horizontalLayout: "default",
        verticalLayout: "default"
    }))
};

fancyFigs();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "company_db"
});

connection.connect(function(err){
    if (err) throw (err)
});

