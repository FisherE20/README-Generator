const inquirer = require("inquirer");
const fs = require("fs");

import generatemarkdown from "./utils/generateMarkdown.js";

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
        message: "What if any technologies did you use?",
        choices: [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "Node.js"
        ]
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
        Message: "What License was used?",
        choices: [
            "MIT",
            "Public Domain (Unlicensed)"
        ]
    },

    {
        type: "input",
        name: "contributors",
        message: "Who were the contributors on this App?"
    }

];



// function to write README file
    function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err){
            throw err;
        }
    })
 };

// function to initialize program
function init() {
            inquirer.prompt(questions).then((answers)=>{
                console.log(answers);

                const response = gererateMarkDown(answers);
                console.log(answers);

            
            

            fs.writeFile('NewREADME.md', generatemarkdown, (err) =>{
                if(err){
                    console.log(err);
                }else {
                    console.log("You have sucessfully logged your responses");
                }
                
            })
        })
}

// function call to initialize program
init();