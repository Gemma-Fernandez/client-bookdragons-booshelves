import React from 'react'
import linkedin from "../images/linkedin-icon.png"
import github from "../images/github-emoji.png"


function AboutUs() {
  return (
    <div>
      <h3>Get to know us</h3>
      <h4> Núria Soley</h4>
      <a href="https://www.linkedin.com/in/n%C3%BAria-soley-arnau-905a67147/"><img src={linkedin} alt="logo-github" style={{width:"25px"}}/></a>
      <a href="https://github.com/NuriaSoley"><img src={github} alt="logo-github" style={{width:"25px"}} /></a>

      <br />
      <br />
      
      <h4> Gemma Fernández</h4>
      <a href="https://www.linkedin.com/in/gemma-fernandez-319bbb255/">
      <img src={linkedin} alt="logo-github" style={{width:"25px"}}/>
      </a>
      <a href="https://github.com/Gemma-Fernandez">
      <img src={github} alt="logo-github" style={{width:"25px"}} />
      </a>


    </div>
  )
}

export default AboutUs