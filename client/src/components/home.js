import React, { useState } from 'react';
import Popup from './popup';
import { MDBBtn, MDBContainer, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle, MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';
import NavBar from "./navbar";
import "./home.css";

import "bootstrap/dist/css/bootstrap.css";

function Home() {
    return (
    
    <MDBContainer fluid class="bg">
    <NavBar></NavBar>

    <div class="container">
    <div class="row">
        <div id="card" class="col-sm-12" style={{width:'95%', marginTop:'10px'}}>
            <h3 className='text-center'>Card Amount: $100.34</h3>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
        <div class="boxed">
            <MDBNavbarLink href='/contact' style={{color:'white'}}><img style={{border: 'none'}} src ="https://www.donate.om/donationsportal/Images/DonationType/kafartyameen.png" alt="icon" width="25" height="25"></img> Payment</MDBNavbarLink>
        </div>
        </div>
        <div class="col-sm-6">
        <div class="boxed">
            <MDBNavbarLink href='/profile' style={{color:'white'}}><img style={{border: 'none'}} src ="https://icon-library.com/images/profile-icon-white/profile-icon-white-22.jpg" alt="icon" width="25" height="25"></img> Profile</MDBNavbarLink>
        </div>
        </div>
        <div class="col-sm-6">
        <div class="boxed">
            <MDBNavbarLink href='/donation' style={{color:'white'}}><img style={{border: 'none'}} src ="https://www.seekpng.com/png/full/117-1179108_donate-donate-icon-white-png.png" alt="icon" width="25" height="25"></img> Donation</MDBNavbarLink>
        </div>
        </div>
        <div class="col-sm-6">
        <div class="boxed">
            <MDBNavbarLink href='/rewards' style={{color:'white'}}><img style={{border: 'none'}} src ="https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=gift" alt="icon" width="25" height="25"></img> Rewards</MDBNavbarLink>
        </div>
        </div>
    </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
    </div>

    </MDBContainer>
    );
}

export default Home;