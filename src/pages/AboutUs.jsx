import React from 'react'
import linkedin from "../images/linkedin-icon.png"
import github from "../images/github-emoji.png"
import Gemma from "../images/Gemma.png"
import Nuria from "../images/Nu.png"


function AboutUs() {
  return (
    <div>
      <h3>Get to know us</h3>
        <div className="aboutUs">
          <h4> Núria Soley</h4>
            <p>Got hook into reading when I was 9 years old and I read the Harry Potter books with my father. Since then, I always carry a book with me.</p>
            <p>If I could only read one egenre, I would choose fantasy, but any book is fine to scape reality.</p>
            <p>And if you ask me: yes, the book is always better than the movie!</p>
              <img src={Nuria} alt="logo-nuria" />
              <br/>
              <div className='links'>
              <a href="https://www.linkedin.com/in/n%C3%BAria-soley-arnau-905a67147/"><img src={linkedin} alt="logo-github" style={{width:"25px"}}/></a>
              <a href="https://github.com/NuriaSoley"><img src={github} alt="logo-github" style={{width:"25px"}} /></a>
              </div>
        </div>

        <br />
        <br />
        
        <div className="aboutUs">        
          <h4> Gemma Fernández</h4>
            <p>Since I was a teenager, I have gotten lost in the pages of books full of magic, mythical creatures, and epic adventures.</p> 
            <p>Fantasy books became my refuge, where I discovered that stories not only transport me to distant places, but also inspire my imagination and awaken creativity.</p>
            <p>What started as a simple hobby has transformed into a true passion that accompanies me every day.</p>
            <img src={Gemma} alt="logo-gemma" />
            <br/>
            <div className='links'>
            <a href="https://www.linkedin.com/in/gemma-fernandez-319bbb255/">
            <img src={linkedin} alt="logo-github" style={{width:"25px"}}/>
            </a>
            <a href="https://github.com/Gemma-Fernandez">
            <img src={github} alt="logo-github" style={{width:"25px"}} />
            </a>
            </div>
        </div>


    </div>
  )
}

export default AboutUs