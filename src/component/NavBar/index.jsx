import React from "react";
import "./index.css";

const NavBar = () => {
  return (
     <div className="header">

       <div>
       <a href="#top">
          <h1 className="initial">CJ</h1>
          </a>
       </div>

       <div className="resume-head">
       <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/17vriJ0wAMEvgVjvrNQ1yf00j4CUUEIR-/view?usp=sharing"
            >
              Resume
            </a>
       </div>

     </div>
  );
};

export default NavBar;
