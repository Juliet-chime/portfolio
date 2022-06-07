import React from 'react'
import line from "../../assets/img/Line1.png";
 import gig from "../../assets/img/gig.png";
 import klasha from "../../assets/img/klasha.png";
 import { motion } from "framer-motion";

const WorkPlace = () => {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }

  return (
   
    <section className="brands-work">
    <div className="container">
      <div className="row">
        <div className=" col brand-text">
          <span>Works for All these brand &nbsp; &nbsp; <img src={line} alt="" className="img-fluid" width="330"  />
          </span>
          <span>Brands &amp; Clients</span>

          <motion.p
  initial="hidden"
  animate="visible"
  variants={variants}
  transition={{ duration: 5,}}>I have experience working for some these brands which has contributed to my career growth, skills and knowlegde . On a team, I tend to help bring out a clearer sense of purpose and encourage clearer communication, resulting in better team results and a higher sense of satisfaction for all involved.</motion.p>
          <a href="https://www.linkedin.com/in/chime-juliet-somtochukwu/">
       <button className="brand-button">Hire Me</button>
       </a>
        </div>

        <div className="col">
          <div className="brand">
          <motion.div 
           animate={{ rotate: 360 }}
           transition={{ repeat: Infinity, duration: 3.5,}}
          className="circle1">
            <div className="circle1-small">
              <img src={gig} alt="" />
            </div>
            <div className="circle1-small circle-size2">
              <img src={klasha} alt="" />
            </div>
            <div className="circle-size3">
            <h3><span>S</span>web</h3>
            </div>
          </motion.div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          </div>
         
        </div>
      </div>
    </div>
  </section>
  )
}

export default WorkPlace