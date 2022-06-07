import React from 'react'
import line2 from "../../assets/img/Line2.png";
import ellipseII from "../../assets/img/Ellipse-21.png";

const MediumPost = () => {
  return (
    <section className="medium pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>What’s new?</h2>
              <br />
              <h1 className="mb-2">
                Recent Posts on Medium &nbsp; &nbsp; <img src={line2} alt="" className="img-fluid" />
              </h1>
            </div>
          </div>
          <br />

         <a href="https://www.educative.io/edpresso/how-to-set-up-tailwind-in-react"  target="_blank"  rel="noreferrer" className="article">
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
  )
}

export default MediumPost