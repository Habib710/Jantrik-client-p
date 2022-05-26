import React from 'react';
import '../Blogs/blog.css';
import 'animate.css';
import mypic from '../../img/mynew.jpg'

const Portfolio = () => {
  return (
    <div className="container my-4 p-4">
      <h1 className="text-center my-5 animate__animated animate__fadeInUpBig animate__slow 3s">Welcome To My Portfolio</h1>
      <div className='port-css py-3'>
      <div>
          <h2>Mohammad Habibullah</h2>
          <h5>FRONT-END WEB DEVELOPER</h5>
        </div>
        <div className='mypic-css'>
            <img width='100%' src={mypic} alt="" />

        </div>
        
      </div>
      <div className="my-5">
        <h3>About Me</h3>
        <h5>
          A front-end developer with extensive experience in building responsive
          websites and web applications. I have a passion for creating
          user-friendly interfaces and strive to build websites that are both
          visually appealing and easy to use. I have a strong understanding of
          front-end development technologies and principles of user experience
          design.
        </h5>
      </div>
      <div className="py-4">
        <h3>EXPERIENCE</h3>
        <h5>
          <li> I have no experience to work with any company/institution.</li>
          <li>But I have Experienced to work with Group in Git-Hub Projects</li>
        </h5>
      </div>
      <div className="py-4">
        <h3>EDUCATION</h3>
        <h5>
          1) HSC --- 2017-2019. Government Adamjeenagar MW College Narayanganj.
          <br />
          2) BSc at CSE --- 2021-present. Green University of Bangladesh. <br />
          3) Web Development Course,programming-hero
        </h5>
      </div>
      <div className="py-4">
        <h3>SKILLS</h3>
        <h5>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>BOOTSTRAP 5</li>
          <li>TAILWIND</li>
          <li>JAVASCRIPT ES6</li>
          <li>REACT JS</li>
          <li>NODE JS</li>
          <li>EXPRESS JS</li>
          <li>MONGODB</li>
          <li>FIGMA,GITHUB,PHOTOSHOP</li>
          <li>OTHERS FRAMEWORK.</li>
        </h5>
      </div>
      <div className='py-5'>
          <h3>Live Links Of Projects</h3>
          <h5>

              <li> https://deponic-62e80.web.app/home
</li>
              <li> https://mdhibib-project.netlify.app/</li>
              <li>   https://whimsical-rolypolydaaa6c.netlify.app/hom</li>
          </h5>
      </div>
    </div>
  )
}

export default Portfolio
