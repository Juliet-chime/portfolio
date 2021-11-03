import React ,{useState, useEffect} from "react";
import NavBar from "../../component/NavBar/index";
import "./index.css";
import juliet from "../../assets/img/julietchime.png";
import line from "../../assets/img/Line1.png";
import line2 from "../../assets/img/Line2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ellipseII from "../../assets/img/Ellipse-21.png";

const Resume = () => {
  const words = ["I’ m a Frontend developer based in Lagos."];
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
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink,words]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
                        <i class="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/chime-juliet-somtochukwu/"
                      >
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/speedysommy?s=09"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://web.facebook.com/chime.juli/"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div class="funthing">
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
              <p>
              I’m a Frontend Software Engineer based in Lagos Nigeria,specializing in the core frontend technologies HTML, CSS, Javascript, and web design frameworks and library. I create fun, innovative, accessible, and fast web applications with
              over 2year hands-on experience 
              doing UI engineering or developing the Frontend of
               applications for startups and well-established organizations.<br/>
                I'm a passionate problem solver and creative thinker and beyond Front-end Software Engineer coding chops, I’m also passionate about volunteering for the Developer's community. I really value the ability to not only perform development projects but also help others improve their craft because 
                I’ve gained so much from others sharing their skills and knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <h1>Some things I’ve built</h1> */}
              <h1 className="mb-2">
                Some things I’ve built &nbsp; &nbsp; <img src={line2} alt="" className="img-fluid" />
              </h1>

              <div className="projects">
                <Slider {...settings}>

                  <div className="project-slide even">
                    <div className="d-flex justify-content-end">
                      <div className="somethings-I-built-icon">
                        {/* dummy link */}
                        <a href="https://github.com/Juliet-chime">
                          <i class="fa fa-github"></i>
                        </a>
                      </div>
                      {/* <div className="somethings-I-built-icon">
                        <a href="#">
                          <i class="fa fa-edit"></i>
                        </a>
                      </div> */}
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>GIGM Web 2.0</h1>
                    <br />
                    <p className="pb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit morbi eget hac nullam consectetur scelerisque turpis
                      nibh.
                    </p>
                    <span>HTML &nbsp;</span>
                    <span>CSS &nbsp;</span>
                    <span>JS &nbsp;</span>
                  </div>

                  <div className="project-slide">
                    <div className="d-flex justify-content-end">
                      <div className="somethings-I-built-icon">
                        <a href="https://github.com/Juliet-chime/cookingrecipe">
                          {" "}
                          <i class="fa fa-github"></i>
                        </a>
                      </div>
                      {/* <div className="somethings-I-built-icon">
                        <a href="#">
                          <i class="fa fa-edit"></i>
                        </a>
                      </div> */}
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>Explore Dishes</h1>
                    <br />
                    <p className="pb-5">
                    A React-based Food App, created with Edamam API that renders differnt dishes and its nutitional information based on user search. 
                    </p>
                    <span>HTML &nbsp;</span>
                    <span>CSS &nbsp;</span>
                    <span>JS &nbsp;</span>
                    <span>ReactJS &nbsp;</span>
                  </div>

                  <div className="project-slide even-1">
                    <div className="d-flex justify-content-end">
                      <div className="somethings-I-built-icon">
                        <a href="https://github.com/Juliet-chime/moviechill">
                          {" "}
                          <i class="fa fa-github"></i>
                        </a>
                      </div>
                      {/* <div className="somethings-I-built-icon">
                        <a href="#">
                          <i class="fa fa-edit"></i>
                        </a>
                      </div> */}
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>Movie Chill</h1>
                    <br />
                    <p className="pb-5">
                    A React-based Movie App, created with OMDb API with the ability to add and remove movies from your favorites list. 
                    </p>
                    <span>HTML &nbsp;</span>
                    <span>CSS &nbsp;</span>
                    <span>JS &nbsp;</span>
                    <span>ReactJS &nbsp;</span>
                  </div>

                  <div className="project-slide">
                    <div className="d-flex justify-content-end">
                      <div className="somethings-I-built-icon">
                        {/* dummy link here */}
                        <a href="https://github.com/Juliet-chime">
                          {" "}
                          <i class="fa fa-github"></i>
                        </a>
                      </div>
                      {/* <div className="somethings-I-built-icon">
                        <a href="#">
                          <i class="fa fa-edit"></i>
                        </a>
                      </div> */}
                    </div>
                    <br />
                    <br />
                    <br />
                    <h1>GIGM Web 2.0</h1>
                    <br />
                    <p className="pb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit morbi eget hac nullam consectetur scelerisque turpis
                      nibh.
                    </p>
                    <span>HTML &nbsp;</span>
                    <span>CSS &nbsp;</span>
                    <span>JS &nbsp;</span>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="medium pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>What’s new?</h2>
              <br />
              {/* <h1>Recent Posts on Medium</h1> */}
              <h1 className="mb-2">
                Recent Posts on Medium &nbsp; &nbsp; <img src={line2} alt="" className="img-fluid" />
              </h1>
            </div>
          </div>
          <br />

         <a href="https://www.educative.io/edpresso/how-to-set-up-tailwind-in-react" className="article">
         <div className="row medium-highlight">
            <div className="col-sm-12 col-md-2">
              <p style={{ fontSize: "14px" }}>30th Sep</p>
            </div>
            <div className="col-sm-12 col-md-7">
              <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                <img src={ellipseII} alt="" />
                &nbsp; How to set up Tailwind in React
              </h2>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="text-right">
                
                <i className="fa fa-arrow-up medium-icon"></i>
              </div>
            </div>
          </div>
         </a>

         <a href="https://www.educative.io/edpresso/how-to-set-up-tailwind-in-react" className="article">
         <div className="row medium-highlight">
            <div className="col-sm-12 col-md-2">
              <p style={{ fontSize: "14px" }}>30th Sep</p>
            </div>
            <div className="col-sm-12 col-md-7">
              <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                <img src={ellipseII} alt="" />
                &nbsp; How to set up Tailwind in React
              </h2>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="text-right">
                
                <i className="fa fa-arrow-up medium-icon"></i>
              </div>
            </div>
          </div>
         </a>

         <a href="https://www.educative.io/edpresso/how-to-set-up-tailwind-in-react" className="article">
         <div className="row medium-highlight">
            <div className="col-sm-12 col-md-2">
              <p style={{ fontSize: "14px" }}>30th Sep</p>
            </div>
            <div className="col-sm-12 col-md-7">
              <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                <img src={ellipseII} alt="" />
                &nbsp; How to set up Tailwind in React
              </h2>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="text-right">
                
                <i className="fa fa-arrow-up medium-icon"></i>
              </div>
            </div>
          </div>
         </a>

         <a href="https://www.educative.io/edpresso/how-to-set-up-tailwind-in-react" className="article">
         <div className="row medium-highlight">
            <div className="col-sm-12 col-md-2">
              <p style={{ fontSize: "14px" }}>30th Sep</p>
            </div>
            <div className="col-sm-12 col-md-7">
              <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                <img src={ellipseII} alt="" />
                &nbsp; How to set up Tailwind in React
              </h2>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="text-right">
                
                <i className="fa fa-arrow-up medium-icon"></i>
              </div>
            </div>
          </div>
         </a>

         <a href="https://www.educative.io/edpresso/how-to-set-up-tailwind-in-react" className="article">
         <div className="row medium-highlight">
            <div className="col-sm-12 col-md-2">
              <p style={{ fontSize: "14px" }}>30th Sep</p>
            </div>
            <div className="col-sm-12 col-md-7">
              <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                <img src={ellipseII} alt="" />
                &nbsp; How to set up Tailwind in React
              </h2>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="text-right">
                
                <i className="fa fa-arrow-up medium-icon"></i>
              </div>
            </div>
          </div>
         </a>

         <a href="https://www.educative.io/edpresso/how-to-set-up-tailwind-in-react" className="article">
         <div className="row medium-highlight">
            <div className="col-sm-12 col-md-2">
              <p style={{ fontSize: "14px" }}>30th Sep</p>
            </div>
            <div className="col-sm-12 col-md-7">
              <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
                <img src={ellipseII} alt="" />
                &nbsp; How to set up Tailwind in React
              </h2>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="text-right">
                
                <i className="fa fa-arrow-up medium-icon"></i>
              </div>
            </div>
          </div>
         </a>
        </div>
      </section>
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
