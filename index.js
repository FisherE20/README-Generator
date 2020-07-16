const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a short description about your project."   
    },
    {
        type:"list",
        name: "technologies",
        message: "What if any technologies did you use?"
    },
    {
        type:"input",
        name: "install",
        message: "How would the user install your application?"
    },
    {
        type:"input",
        name: "api",
        message: "What API's where used in this application?"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
    },
    {
        type: "input",
        name: "website",
        message: "Enter your Website Username"
    },
    {
        type: "list",
        name: "license",
        Message: "What License was used?"
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response)=>{

//this will Create the first line and main header for the repo (that is what the "#" is for) using the users response to RepoName
fs.appendFileSync("README.md", ("#" + response.repoName) + '\n', function(err){

    if (err){
        console.log(err)
    }else{
        console.log("Success")
    }
})
// this will create the 2nd line of the readme describing the application was developed by the users response to githunname
fs.appendFileSync("README.md", ("This application was delevloped by:" + response.gitHubName + `\n`) + `\n`, function(err){

    if (err){
        console.log(err)
    }else{
        console.log("Success")
    }
})
//adds the description of the project that the user entered
fs.appendFileSync("README.md", (response.description) + `\n`, function(err){
    if (err){
        console.log(err)
    }else{
        console.log("Success")
    }
})
    })
}

// function call to initialize program
init();