
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
   ${data.description}
  
   ---
  
   ### Table of Contents
   * [Description](#description)
   * [How To Use](#how-to-use)
   * [References](#references)
   * [Test](#test)
   * [Questions](#questions)
   * [License](#license)
   * [Contributors](#contributors)
   * [Author Info](#author-info)
  
   ---
  
   #### Technologies
  
  -  ${data.technologies}

  [Back To The Top](#${data.title})
  
 ---
  
   ## How To Use
  
   #### Installation
   ${data.description}
  
  
   #### API Reference
   ${data.api}
  
   
   [Back To The Top](#${data.title})
  
   ---

   #### Test
   ${data.test}

   [Back To The Top](#${data.title})

   ---
  
   ## Questions
  
   - Email - [${data.email}](${data.email})
   
  
   [Back To The Top](#${data.title})
  
   ---
  
   ## License
   ${data.license}
  
   [Back To The Top](#${data.title})
  
   ---
  
   ## Author Info
  
   - GitHub - [${data.github}](https://github.com/${data.github}/${data.title})
   - Website - [${data.website}](https://${data.website}.github.io/Responsive-Portfolio/) 
  
  [Back To The Top](# ${data.title})

`;
}

module.exports = {generateMarkdown: generateMarkdown};


