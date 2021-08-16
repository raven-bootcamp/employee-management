const EmpData = require("./scripts/EmpData");
const connection = require("./scripts/dbConnection");
const cTable = require("console.table");
const figlet = require("figlet");
const inquirer = require("inquirer");
const view = require("./scripts/viewFunctions");
const add = require("./scripts/addFunctions");
const del = require("./scripts/deleteFunctions");
const update = require("./scripts/updateFunctions");


// Use inquirer to prompt user for information
const promptUser = (questions) => {
    return inquirer.prompt(questions);
};


// Function to exit the application
const exitApp = () => {
    console.log("You have now exited. Thanks for using EMS!");
    connection.end();
    process.exit();
};

// Object to hold the task functions to fire from inquirer prompt
const actionFunctions = {
    "View All Employees": view.viewEmployees,
    "View All Employees by Department": view.viewEmployeesByDept,
    "View All Employees by Manager": view.viewEmployeesByMgr,
    "Add Employee": add.addEmployee,
    "Remove Employee": del.delEmployee,
    "Update Employee Role": update.updateEmpRole,
    "Update Employee Manager": update.updateEmpMgr,
    "View All Roles": view.viewRoles,
    "Add Role": add.addRole,
    "Remove Role": del.delRole,
    "View All Departments": view.viewDepartments,
    "View Budget by Department": view.viewBudgetByDept,
    "Add Department": add.addDepartment,
    "Remove Department": del.delDepartment,
    "Exit Application": exitApp
}

// Inquirer question - list of tasks
const action = [
    {
        type: "list",
        message: "Please select an option to perform an action:",
        name: "task",
        choices: [
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View All Roles",
            "Add Role",
            "Remove Role",
            "View All Departments",
            "View Budget by Department",
            "Add Department",
            "Remove Department",
            "Exit Application"
        ]
    }
];

// Init prompt user for task to complete
const init = async () => {
    try {
        console.log("\n------------------------\n")
        const actionChoice = await promptUser(action);
        console.log("\n------------------------\n")
        await actionFunctions[actionChoice.task]();
        init();
    } catch (err) {
        console.log(err);
    }
};

// display title screen and continue
const begin = () => {
    figlet("EMP-MAN", (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log("\n")
        console.log(data);
        console.log("********************")
        console.log("\nEmployee Management")
        console.log("\n********************")
        init();
    })

}

begin();