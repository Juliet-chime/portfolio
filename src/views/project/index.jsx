import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import line2 from "../../assets/img/Line2.png";

const ProjectDone = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
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
    <section className="pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* <h1>Some things I’ve built</h1> */}
          <h1 className="mb-2">
            Some things I’ve built &nbsp; &nbsp; <img src={line2} alt="" className="img-fluid" />
          </h1>

          <div className="projects">
            <Slider {...settings}>


              
             <a href="https://dashboard.klasha.com/" target="_blank"  rel="noreferrer" className="linktonetlify">
             <div className="project-slide even">
                <div className="d-flex justify-content-end">
                  <div className="somethings-I-built-icon">
                    {/* dummy link */}
                    <a href="https://github.com/Juliet-chime">
                      <i className="fa fa-github"></i>
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
                <h1>Klasha Merchant Dashboard</h1>
                <br />
                <p className="pb-5">
              Klasha Merchant Dashboard analysis transactions of payment made to merchant online from Africa.
                </p>
                <span>HTML &nbsp;</span>
                <span>CSS &nbsp;</span>
                <span>JS &nbsp;</span>
                <span>React &nbsp;</span>
                <span>Typescript &nbsp;</span>
              </div>
             </a>

             <a href="https://www.gigm.com/"  target="_blank"  rel="noreferrer" className="linktonetlify">
             <div className="project-slide even">
                <div className="d-flex justify-content-end">
                  <div className="somethings-I-built-icon">
                    {/* dummy link */}
                    <a href="https://github.com/Juliet-chime">
                      <i className="fa fa-github"></i>
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
                  A revamp of GIGMobility to optimize the process of users booking experience across mutilpe platforms.
                </p>
                <span>HTML &nbsp;</span>
                <span>CSS &nbsp;</span>
                <span>JS &nbsp;</span>
                <span>React &nbsp;</span>
              </div>
             </a>

             
             <a href="https://cryptotiding.netlify.app/"  target="_blank"  rel="noreferrer" className="linktonetlify">
             <div className="project-slide even">
                <div className="d-flex justify-content-end">
                  <div className="somethings-I-built-icon">
                    {/* dummy link */}
                    <a href="https://github.com/Juliet-chime">
                      <i className="fa fa-github"></i>
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
                <h1>CryptoTidings</h1>
                <br />
                <p className="pb-5">
                  A Crypto information App, created with rapid Api that gives current information about cryptocurrency.
                </p>
                <span>HTML &nbsp;</span>
                <span>CSS &nbsp;</span>
                <span>JS &nbsp;</span>
                <span>React &nbsp;</span>
                <span>Redux, Redux Toolkit &nbsp;</span>
              </div>
             </a>

              <a href="https://analyzefood.netlify.app"  target="_blank"  rel="noreferrer" className="linktonetlify">
              <div className="project-slide">
                <div className="d-flex justify-content-end">
                  <div className="somethings-I-built-icon">
                    <a href="https://github.com/Juliet-chime/cookingrecipe">
                      {" "}
                      <i className="fa fa-github"></i>
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
                A React-based Food App, created with Edamam API that renders different dishes and its nutitional information based on user search. 
                </p>
                <span>HTML &nbsp;</span>
                <span>CSS &nbsp;</span>
                <span>JS &nbsp;</span>
                <span>ReactJS &nbsp;</span>
              </div>
              </a>

<a href="https://julietmovie.netlify.app"  target="_blank"  rel="noreferrer" className="linktonetlify">
<div className="project-slide even-1">
                <div className="d-flex justify-content-end">
                  <div className="somethings-I-built-icon">
                    <a href="https://github.com/Juliet-chime/moviechill">
                      {" "}
                      <i className="fa fa-github"></i>
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
</a>
              

             <a href="https://trustbancloginuser.netlify.app" target="_blank"  rel="noreferrer" className="linktonetlify">
             <div className="project-slide">
                <div className="d-flex justify-content-end">
                  <div className="somethings-I-built-icon">
                    {/* dummy link here */}
                    <a href="https://github.com/Juliet-chime/TrustBanc">
                      {" "}
                      <i className="fa fa-github"></i>
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
                <h1>TrustBanc</h1>
                <br />
                <p className="pb-5">
                  A login application that enables users login and directs to another page showing the information gotten from the backend. 
                </p>
                <span>HTML &nbsp;</span>
                <span>CSS &nbsp;</span>
                <span>JS &nbsp;</span>
                <span>ReactJS &nbsp;</span>
              </div>
             </a>

              <a href="https://elegant-gates-67b1b3.netlify.app/"  target="_blank"  rel="noreferrer" className="linktonetlify">
              <div className="project-slide">
                <div className="d-flex justify-content-end">
                  <div className="somethings-I-built-icon">
                    {/* dummy link here */}
                    <a href="https://github.com/Juliet-chime/percentage-calculator">
                      {" "}
                      <i className="fa fa-github"></i>
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
                <h1>Percentage Calculator</h1>
                <br />
                <p className="pb-5">
                  An application that calculate percentage,the UI has glassmorphism layout
                </p>
                <span>HTML &nbsp;</span>
                <span>CSS &nbsp;</span>
                <span>JS &nbsp;</span>
                <span>React &nbsp;</span>
              </div>
              </a>

              <a href="https://objective-khorana-8e8784.netlify.app"  target="_blank"  rel="noreferrer" className="linktonetlify">
              <div className="project-slide">
                <div className="d-flex justify-content-end">
                  <div className="somethings-I-built-icon">
                    {/* dummy link here */}
                    <a href="https://github.com/Juliet-chime/9jalove">
                      {" "}
                      <i className="fa fa-github"></i>
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
                <h1>9ja Love</h1>
                <br />
                <p className="pb-5">
                  A dating site created to find love, happiness and a soulmate
                </p>
                <span>HTML &nbsp;</span>
                <span>CSS &nbsp;</span>
                <span>JS &nbsp;</span>
                <span>React &nbsp;</span>
              </div>
              </a>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default ProjectDone