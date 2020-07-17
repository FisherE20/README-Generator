
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
   ${data.description}
  
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
  
  -  ${data.technologies}
  
 ---
  
   ## How To Use
  
   #### Installation
   ${data.description}
  
  
   #### API Reference
   ${data.api}
  
   ```
   ```
   [Back To The Top](# ${data.title})
  
   ---
  
   ## Questions
  
   - Email - [${data.email}](${email})
   - Website - [${data.username}](https://${data.username}.github.io/${data.title}/) 
  
   [Back To The Top](#${data.title})
  
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

export default generateMarkdown;


