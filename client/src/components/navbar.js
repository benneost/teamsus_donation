import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler, 
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse } from 'mdb-react-ui-kit';


function NavBar() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' style={{backgroundColor: "#104046", borderRadius:10}}>
        <MDBContainer fluid>
            <MDBNavbarBrand href='#' className='text-white'>AppName</MDBNavbarBrand>
            <MDBNavbarToggler
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavSecond(!showNavSecond)}
            >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav>
                <MDBNavbarLink active aria-current='page' href='/home' className='text-white'>
                Home
                </MDBNavbarLink>
                <MDBNavbarLink href='/profile_page' className='text-white'>Profile</MDBNavbarLink>
                <MDBNavbarLink href='/donation' className='text-white'>Donation</MDBNavbarLink>
                <MDBNavbarLink href='/rewards' className='text-white'>Rewards</MDBNavbarLink>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>

        
    );
}

export default NavBar;