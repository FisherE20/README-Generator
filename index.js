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

    // {
    //     type:"input",
    //     name: "api",
    //     message: "What API's where used in this application?"
    // },

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
// function writeToFile(generateMarkdown.js, responses) {
// };

// function to initialize program
function init() {
            inquirer.prompt(questions).then((response)=>{
                console.log(response);

                const readMeInfo =  `# ${response.title}
                ## Description
                 ${response.description}
                
                 ---
                
                 ### Table of Contents
                 * [Description](#description)
                 * [How To Use](#how to use)
                 * [References](#references)
                 * [License](#license)
                 * [Contributors](#contributors)
                 * [Author Info](#author-info)
                
                 ---
                
                 #### Technologies
                
                - JAVASCRIPT
                 ${response.technologies}
                
               ---
                
                 ## How To Use
                
                 #### Installation
                 ${response.description}
                
                
                
                
                 ```
                 ```
                 [Back To The Top](# ${response.title})
                
                 ---
                
                 ## References
                
                 - GitHub - [${response.username}](https://github.com/${response.username}/${response.title})
                 - Website - [${response.username}](https://${response.username}.github.io/${response.title}/) 
                
                 [Back To The Top](#${response.title})
                
                 ---
                
                 ## License
                 ${response.license}
                
                 [Back To The Top](# ${response.title})
                
                 ---
                
                 ## Author Info
                
                 - GitHub - [${response.username}](https://github.com/${response.username}/${response.title})
                 - Website - [${response.username}](https://${response.username}.github.io/${response.title}/) 
                
                [Back To The Top](# ${response.description})`
            

            fs.writeFile('NewREADME.md', readMeInfo, (err) =>{
                if(err){
                    throw err
                }else {
                    console.log("You have sucessfully logged your responses");
                }
            })
        })
}

// function call to initialize program
init();