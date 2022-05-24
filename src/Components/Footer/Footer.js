
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About the JANTRIK</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
    <div className="icons">
      <a href='#hjh'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
      <a href='#hjh'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
      <a href='#hjh'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
      <a href='#hjh'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
      <a href='#hjh'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
    
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> Narayanjong,#523/</span> Dhaka, Bangladesh</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+880) 1854718239</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#dsfg">mdhabib71024@gmail.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h1> JAN<span> TRIK</span></h1>
    <p className="menu">
      <Link to='/'> Home</Link> |
      <Link to='blog'> About</Link> |
      <Link to='protfolio'> Protfolio</Link> |
      <Link to='login'> Login</Link> |
      <Link to='login'> sign in</Link> |
    
      
    </p>
    <h6 className='fw-bold'>Md Habib</h6>
    <p className="name">JANTRIK &copy; 2022</p>
  </div>
</footer>
            
        </div>
    );
};

export default Footer;