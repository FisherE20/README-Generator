
// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
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
  
  
   #### API Reference
   ${response.api}
  
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
  
  [Back To The Top](# ${response.description})

`;
}

module.exports = generateMarkdown;


