import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../friebase.init';
import CustomLink from '../Customs/CustomLink';
import './Header.css'


const Header = () => {
  const [user] = useAuthState(auth);
  

  const singout = () => {
    signOut(auth);
  };
    return (
        <div className='navbar-css'>
            <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className='text-bold fs-1 Hading-css' > <span className='Header-span'>JAN</span>TRIK</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto nav-css">
      <CustomLink to='/' >Home</CustomLink>
      
      {
        user?<CustomLink to='dashboard' >Dashboard</CustomLink>:''
      }
      <CustomLink to='Blogs' >Blogs</CustomLink>
      
      <CustomLink to='portfolio' >Portfolio</CustomLink>
     
      {
          user?<button onClick={singout} className='btn btn-singout-css'>Sign Out</button>
          :
          <CustomLink to='/login' >Login</CustomLink>
        
        }
     
     
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;