import React from 'react'
import { motion } from 'framer-motion'
import resume from "./resume.pdf.pdf"

const Skills = () => {

  return (
    <section className="skill-section">
   
    <div className="brand-text awesome-text" >
      <span>My Awesome
      </span>
      <span>Services</span>
      <a href={resume} target="_blank"  rel="noreferrer" download>
   <button className="brand-button">Download CV</button>
   </a>
    </div>

    
<div className="skills-holder">
<motion.div 
 animate={{ x: 100 }}
 transition={{ repeat: Infinity,linear:"linear", duration: 9,}}
className="skills card1">
<p>😎</p>
<p>Design library</p>
<p>Bootstrap, Ant Design, Material UI,Semantic UI,SCSS,Styled component
</p>
</motion.div>

<motion.div 
 animate={{ y: -50 }}
 transition={{ repeat: Infinity, duration: 7,}} className="skills  card2">
<p> 🧑‍💻</p>
<p>Developer</p>
<p>HTML, CSS,Javascript, JQuery, Typescript, ReactJS, Redux, Reack Hooks</p>
</motion.div> 

<motion.div 
 animate={{ y: 50 }}
 transition={{ repeat: Infinity, duration: 6,}} className="skills  card3">
<p>💻</p>
<p>cloud</p>
<p>Git, NPM, Heroku, Web development on server side frameworks like WordPress, Firebase, Azure Devops,Netlify</p>
</motion.div>
</div>
 
</section>
  )
}

export default Skills