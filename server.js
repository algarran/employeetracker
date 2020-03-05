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


