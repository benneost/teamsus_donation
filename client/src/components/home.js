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
    <div class="row">
        <div id="card" class="col-sm-12">
            card amount
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
        payment
        </div>
        <div class="col-sm-6">
        profile
        </div>
        <div class="col-sm-6">
        beneficiaries
        </div>
        <div class="col-sm-6">
        rewards
        </div>
    </div>


    </div>

    </MDBContainer>
    );
}

export default Home;