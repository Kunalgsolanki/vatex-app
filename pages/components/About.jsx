/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Team from './Team';
import Image from 'next/image';


const About = () => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url("https://fonts.googleapis.com/css?family=Roboto");
          p {
            color: rgb(245, 240, 240);
          }
          p {
            color: white;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: "Roboto", sans-serif;
            position: relative;
            background-color: black;
          }
          nav {
            width: 100%;
            height: 100px;
            background-color: rgba(51, 51, 51, 0.3);
            position: absolute;
            top: 0;
            z-index: 5;
          }
          .header {
            width: 100%;
            height: 500px;
            opacity: 0.8;
            background-color: rgb(0, 4, 6);
            background-image: url("https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239_1280.jpg");
            background-size: cover;
            background-position: bottom;
          }
          .container {
            width: 100%;
          }
          .container h1 {
            font-size: 50px;
          }
          .about {
            padding: 5% 0;
            width: 100%;
            height: auto;
            background-color: #070707;
          }
          .about .left {
            padding: 2% 0;
            float: left;
            width: 50%;
            display: inline-block;
            
            
          }
          .about .right {
            width: 50%;
            display: inline-block;
            
          }
          .about .right img {
            width: 100%;
            margin-left: 200px;
          }
          .about .left h1 {
            text-align: center;
            color: #f9f2f2;
            margin: 0 0 10px 0;
          }
          .about .left hr {
            width: 20%;
            border-top: 2px solid #fcf9f9;
            border-bottom: none;
          }
          .about .left p {
            font-size: 1rem;
            margin: 40px auto;
            width: 80%;
          }
          .mission {
            padding: 5% 0;
            width: 100%;
            height: auto;
            background-color: #070707;
          }
          .mission .right {
            padding: 6% 0;
            width: 50%;
            display: inline-block;
            
          
           
          }
          .mission .left {
            float: left;
            width: 50%;
            display: inline-block;
          }
       
          .mission .right h1 {
            text-align: center;
            color: #efe7e7;
            margin: 0 0 20px 0;
          }
          .mission .right hr {
            width: 35%;
            border-top: 2px solid #efeaea;
            border-bottom: none;
          }
          .mission .right p {
            font-size: 1rem;
            margin: 40px auto;
            width: 80%;
          }
          .team {
            width: 90%;
            margin: auto;
          }

          /* Media Queries */
          @media screen and (max-width: 768px) {
            .about .left, .about .right, .mission .left, .mission .right {
              width: 100%;
              text-align: center;
              padding: 0;
            }
            .about .left hr, .mission .right hr {
              width: 35%;
              margin: 20px auto;
            }
            .about .left p, .mission .right p {
              width: 80%;
              margin: 20px auto;
            }
          }
          `,
        }}
      />
      <nav>
        <div className="container">
          <h1>About Us</h1>
        </div>
      </nav>
      <div className="header border-t-2 border-b-2">
        <div className="container">
          <h1>Welcome to Our Website</h1>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="left">
            <h1>About Us</h1>
            <hr />
            <p>
            Welcome to VARTIX AEROSPACE, an innovative aerospace company dedicated to pushing the boundaries of technological advancement and unlocking the limitless possibilities of space exploration. At VARTIX , our mission is to revolutionize the aerospace industry by developing cutting-edge solutions that propel humanity towards a future of sustainable space travel, scientific discovery, and the expansion of our understanding of the universe. Guided by a vision of pioneering new frontiers, we are committed to fostering collaboration, embracing bold ideas, and inspiring the next generation of space explorers. With our unwavering dedication to excellence, we aim to shape the future of space exploration and make space accessible to all, opening up a new era of boundless opportunities. Join us as we embark on this extraordinary journey into the cosmos.
            </p>
          </div>
          <div className="right">
            <Image
              src="/s.jpg"
              alt=""
              width={1200}
              height={1200}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="mission">
        <div className="container">
          <div className="left">
            <Image
              src="/L.jpeg"
              alt=""
              width={500}
              height={230}
              loading="lazy"
            />
          </div>
          <div className="right">
            <h1>Our Mission</h1>
            <hr />
            <p>
              Sed eu urna id elit hendrerit vestibulum. Curabitur rhoncus
              scelerisque dapibus. Nulla facilisi. Ut accumsan, dui eget
              dignissim volutpat, nunc nunc scelerisque erat, nec placerat enim
              leo non justo. Suspendisse potenti. Donec euismod metus quis justo
              lobortis ullamcorper. Sed rhoncus metus quis ex auctor, non
              tincidunt diam egestas. Phasellus nec placerat odio. Morbi ac
              lorem sit amet dolor interdum auctor. Suspendisse quis tincidunt
              urna.
            </p>
          </div>
        </div>
      </div>
      <div className="team">
        <Team />
      </div>
    </div>
  );
};

export default About;
