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
        <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='#'>AppName</MDBNavbarBrand>
            <MDBNavbarToggler
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavSecond(!showNavSecond)}
            >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav>
                <MDBNavbarLink active aria-current='page' href='/home'>
                Home
                </MDBNavbarLink>
                <MDBNavbarLink href='/profile_page'>Profile</MDBNavbarLink>
                <MDBNavbarLink href='/beneficiary'>Donation</MDBNavbarLink>
                <MDBNavbarLink href='/profile'>Profile</MDBNavbarLink>
                <MDBNavbarLink href='/donation'>Donation</MDBNavbarLink>
                <MDBNavbarLink href='/rewards'>Rewards</MDBNavbarLink>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>

        
    );
}

export default NavBar;