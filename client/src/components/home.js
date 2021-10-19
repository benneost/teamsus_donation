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
    <MDBContainer fluid>
    <NavBar></NavBar>

    <div class="container">
    <div class="row fancy">
        <div id="card" class="col-sm-12">
            card amount
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
        <div class="boxed">
            <MDBNavbarLink href='/payment' style={{color:'black'}}>Payment</MDBNavbarLink>
        </div>
        </div>
        <div class="col-sm-6">
        <div class="boxed">
            <MDBNavbarLink href='/profile' style={{color:'black'}}>Profile</MDBNavbarLink>
        </div>
        </div>
        <div class="col-sm-6">
        <div class="boxed">
            <MDBNavbarLink href='/donation' style={{color:'black'}}>Donation</MDBNavbarLink>
        </div>
        </div>
        <div class="col-sm-6">
        <div class="boxed">
            <MDBNavbarLink href='/rewards' style={{color:'black'}}>Rewards</MDBNavbarLink>
        </div>
        </div>
    </div>


    </div>

    </MDBContainer>
    );
}

export default Home;