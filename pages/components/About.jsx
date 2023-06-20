/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const About = () => {
  return (
    <div>
      <>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n  @import url("https://fonts.googleapis.com/css?family=Roboto");\n  p{\n    color: rgb(245, 240, 240);\n  }\n  P{\n    color: white;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: "Roboto", sans-serif;\n    position: relative;\n  }\n  nav {\n    width: 100%;\n    height: 100px;\n    background-color: rgba(51, 51, 51, 0.3);\n    position: absolute;\n    top: 0;\n    z-index: 5;\n  }\n  .header {\n    width: 100%;\n    height: 500px;\n    opacity: 0.8;\n    background-color: rgb(0, 4, 6);\n    background-image: url("https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239_1280.jpg");\n    background-size: cover;\n    background-position: bottom;\n  }\n  .container {\n    width: 100%;\n  }\n  .container h1 {\n    font-size: 50px;\n  }\n  .about {\n    padding: 5% 0;\n    width: 100%;\n    height: auto;\n    background-color: #070707;\n  }\n  .about .left {\n    padding: 2% 0;\n    float: left;\n    width: 50%;\n    display: inline-block;\n  }\n  .about .right {\n    width: 50%;\n    display: inline-block;\n  }\n  .about .right img {\n    width: 100%;\n  }\n  .about .left h1 {\n    text-align: center;\n    color: #f9f2f2;\n    margin: 0 0 10px 0;\n  }\n  .about .left hr {\n    width: 20%;\n    border-top: 2px solid #fcf9f9;\n    border-bottom: none;\n  }\n  .about .left p {\n    font-size: 1rem;\n    margin: 40px auto;\n    width: 80%;\n  }\n\n  .mission {\n    padding: 5% 0;\n    width: 100%;\n    height: auto;\n    background-color: #070707;\n  }\n  .mission .right {\n    padding: 2% 0;\n    width: 50%;\n\n    display: inline-block;\n  }\n  .mission .left {\n    float: left;\n    width: 50%;\n\n    display: inline-block;\n  }\n  .mission .left img {\n    width: 100%;\n  }\n  .mission .right h1 {\n    text-align: center;\n    color: #efe7e7;\n    margin: 0 0 20px 0;\n  }\n  .mission .right hr {\n    width: 35%;\n    border-top: 2px solid #efeaea;\n    border-bottom: none;\n  }\n  .mission .right p {\n    font-size: 1rem;\n    margin: 40px auto;\n    width: 80%;\n  }\n\n  .team {\n    width: 90%;\n    margin: auto;\n    padding: 5% 5%;\n    over-flow: hidden;\n  }\n  .team h1 {\n    text-align: center;\n    color: #0a0b0b;\n  }\n  .team h1 hr {\n    width: 15%;\n    border-top: 2px solid #000;\n    background-color: transperant;\n    border-bottom: none;\n    margin-bottom: 50px;\n  }\n  .team .card {\n    padding-bottom: 20px;\n    padding-top: 20px;\n    position: relative;\n    min-width: 20%;\n    height: 500px !important;\n    height: auto;\n    background-color: #090909;\n    display: inline-block;\n    margin: 40px 6.5%;\n    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);\n    text-align: center;\n  }\n  .card .circle-container {\n    position: relative;\n    background-color: #579f79;\n    width: 250px;\n    height: 250px;\n    border: none;\n    border-radius: 50%;\n    margin: auto;\n    color: #090909;\n  }\n  .circle-container h1 {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    margin: 0;\n    font-size: 60px;\n  }\n\n  .team .card h2 {\n    text-align: center;\n    margin: 30px 0 0 0;\n  }\n  .team .card h4 {\n    text-align: center;\n    margin: 10px 0 0 0;\n  }\n  .team .card p {\n    width: 250px;\n    margin: 30px auto;\n    text-align: center;\n  }\n  .clear {\n    clear: both;\n  }\n\n  footer {\n    width: 100%;\n    height: 100px;\n    background-color: #f2f6f9;\n    color: black;\n  }\n  footer p {\n    text-align: center;\n   color: black;\n    padding: 0 2%;\n  }\n\n  1\n/* media */\n@media(max-width:1200px) {\n    .mission .right p {\n      font-size: 0.8rem;\n      margin: 20px auto;\n    }\n    .about .left p {\n      font-size: 0.8rem;\n      margin: 20px auto;\n    }\n  }\n\n  @media (max-width: 992px) {\n    .about .left {\n      width: 100%;\n    }\n    .about .right {\n      width: 100%;\n    }\n    .mission .left {\n      width: 100%;\n    }\n    .mission .right {\n      width: 100%;\n    }\n    .team .card {\n      width: 40%;\n    }\n  }\n\n  @media (max-width: 768px) {\n    .team .card {\n      width: 100%;\n    }\n    nav {\n      height: 80px;\n    }\n  }\n'
          }}
        />
        
        <nav />
        <div className="header" />
        <div className="container">
          <div className="about">
            <div className="left">
              <h1>About us</h1>
              <hr />
              <p>WE ARE VARTIX AEROSPACE</p>
              <p>
                With a passion for pushing the boundaries of aviation, we are on a
                mission to redefine the future of aerospace technology. Our team of
                brilliant engineers, designers, and visionaries is committed to
                crafting innovative solutions that transcend the limitations of
                conventional flight. From advanced propulsion systems to cutting-edge
                spacecraft designs, we are dedicated to revolutionizing the way we
                explore our skies and beyond. Guided by our unwavering commitment to
                safety, efficiency, and sustainability, we aim to create a new era of
                aerospace excellence. Join us as we soar to new heights and unlock the
                limitless possibilities of the cosmos. VARTIX Aerospace—the future is
                now.
              </p>
            </div>
            <div className="right">
              <img src="https://cdn.pixabay.com/photo/2020/09/14/10/45/spaceship-5570682_1280.jpg" />
            </div>
            <div className="clear" />
          </div>
          <div className="mission">
            <div className="left">
              <img src="https://cdn.pixabay.com/photo/2012/11/28/10/34/rocket-launch-67643_640.jpg" />
            </div>
            <div className="right">
              <h1>Mission Statement</h1>
              <hr />
              <p>
                At Vartix Aerospace, our mission is to redefine the boundaries of
                aerospace innovation and exploration. We are driven by a relentless
                pursuit of excellence, pushing the frontiers of technology to
                transform the way we navigate our skies and beyond. With an unwavering
                commitment to safety, sustainability, and efficiency, we strive to
                create groundbreaking solutions that inspire and empower humanity.
                Through our cutting-edge spacecraft designs, advanced propulsion
                systems, and visionary engineering, we aim to revolutionize the
                aerospace industry and unlock the limitless potential of space. Guided
                by our passion for discovery, we envision a future where space
                exploration becomes accessible to all, enabling us to better
                understand our world, protect our planet, and reach for the stars.
                Together, let us embark on this extraordinary journey of exploration,
                innovation, and transformation. Vartix Aerospace — Inspiring the next
                era of aerospace excellence.
              </p>
            </div>
            <div className="clear" />
          </div>
          <div className="team">
            <h1>
              Our Team
              <hr />
            </h1>
            <div className="card">
              <div className="circle-container">
                <h1 style={{ color: "#fff" }}>M</h1>
              </div>
              <h2>Mahesh E U</h2>
              <h4>Technical Lead</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="card">
              <div className="circle-container">
                <h1 style={{ color: "#fff" }}>M</h1>
              </div>
              <h2>Mridul</h2>
              <h4>Evangelist</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="card">
              <div className="circle-container">
                <h1 style={{ color: "#fff" }}>R</h1>
              </div>
              <h2>Rajesh</h2>
              <h4>Evangelist</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="card">
              <div className="circle-container">
                <h1 style={{ color: "#fff" }}>B</h1>
              </div>
              <h2>Bharti</h2>
              <h4>Evangelist</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="card">
              <div className="circle-container">
                <h1 style={{ color: "#fff" }}>A</h1>
              </div>
              <h2>Anhsuman</h2>
              <h4>Advisor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="card">
              <div className="circle-container">
                <h1 style={{ color: "#fff" }}>S</h1>
              </div>
              <h2>Shruti</h2>
              <h4>Advisor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <footer>
          <br />
          <p>Copyright ©VARTIX AEROSPACE All rights reserved</p>
        </footer>
      </>

    </div>
  )
}

export default About
