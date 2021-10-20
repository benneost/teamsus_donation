import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler, 
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse } from 'mdb-react-ui-kit';

import image from '../images/UP (1).png';

function NavBar() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' style={{backgroundColor: "#104046", borderRadius:10}}>
        <MDBContainer fluid>
            {/* <MDBNavbarBrand href='#' className='text-white'>AppName</MDBNavbarBrand>  */}
            <div>
            <img src='https://i.ibb.co/Wy93mHK/UP-2.png' width = '150px' alt='...'/>
            </div>
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
                <MDBNavbarLink href='/profile' className='text-white'>Profile</MDBNavbarLink>
                <MDBNavbarLink href='/donation' className='text-white'>Donation</MDBNavbarLink>
                <MDBNavbarLink href='/rewards' className='text-white'>Rewards</MDBNavbarLink>
                <MDBNavbarLink href='/history' className='text-white'>History</MDBNavbarLink>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>

        
    );
}

export default NavBar;