import React ,{useState, useEffect} from "react";
import NavBar from "../../component/NavBar/index";
import "./index.css";
import juliet from "../../assets/img/julietchime.png";
import line from "../../assets/img/Line1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectDone from "../project";
import MediumPost from "../mediumPost";
import Contact from "../form";
import WorkPlace from "../WorkPlace";
import Skills from "../skills";
import { motion } from "framer-motion";

const Resume = () => {
  const words = ["I’ m a Frontend developer based in Lagos, Nigeria."];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if ( subIndex === words[index].length + 1 && 
        index !== words.length - 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);


  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <div id="top">
      <NavBar />
      <section className="intro">
        <div className="container holder">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <div className="intro-holder1">
                <div className="intro-text">
                  <h1>Frontend</h1>
                  <h2>Developer</h2>
                </div>
                <div className="intro-img">
                  <img src={juliet} alt="" className="img-fluid" />
                </div>
                <div className="intro-name">
                  <h1>Somtochukwu Juliet</h1>
                </div>
                <div className="intro-icon">
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Juliet-chime"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/chime-juliet-somtochukwu/"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/speedysommy?s=09"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://web.facebook.com/chime.juli/"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="funthing">
                <h3>{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</h3>
                <p>I like making fun and interactive things on the web</p>
                <br />
                <div className="getintouch-btn">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:annychime@gmail.com"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <h1>About Me</h1> */}
              <h1 className="mb-2">
                About Me &nbsp; &nbsp; <img src={line} alt="" className="img-fluid"  />
              </h1>
              <motion.p
  initial="hidden"
  animate="visible"
  variants={variants}
  transition={{ duration: 5,}}>
              I’m a Frontend Software Engineer based in Lagos Nigeria,specializing in the core frontend technologies HTML, CSS, Javascript, and web design frameworks and library. I create fun, innovative, accessible, and fast web applications with
              over 2year hands-on experience 
              doing UI engineering or developing the Frontend of
               applications for startups and well-established organizations.<br/><br/>
                I'm a passionate problem solver and creative thinker and beyond Front-end Software Engineer coding chops, I’m also passionate about volunteering for the Developer's community. I really value the ability to not only perform development projects but also help others improve their craft because 
                I’ve gained so much from others sharing their skills and knowledge.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <Skills/>
      <WorkPlace/>
      <ProjectDone/>
      <MediumPost/>
      <Contact/>
     
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="mb-2">
                I occassionally take on freelance opportunities
              </h1>
              <p>
                Send me an email{" "}
                <a href="mailto:annychime@gmail.com"> annychime@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>2021 Somtochuku Juliet</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
