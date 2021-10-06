import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' fixed='top' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/home' style={{height:'3.5rem', marginRight:'1rem'}} className="px-4">Elearn</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavNoTogglerSecond} className="px-4">
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active href='/learnercourse'>
                Course
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active href='/learnerforum'>
                Forum
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <span className='navbar-text'>Benjamin</span>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}