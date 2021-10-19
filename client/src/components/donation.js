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

function Donation() {
    return (
    <MDBContainer fluid>
    <NavBar></NavBar>

    <div class="container">
    <div class="row">
        <div id="card" class="col-sm-12">
            card amount
        </div>
    </div>
        Recommended
        <div class="row">
            <div class="col-sm boxed">
            Insert Event
            </div>

            <div class="col-sm boxed">
            Insert Event
            </div>

            <div class="col-sm boxed">
            Insert Event
            </div>
        </div>

        Your Top Picks
        <div class="row">
            <div class="col-sm boxed">
            Insert Event
            </div>

            <div class="col-sm boxed">
            Insert Event
            </div>

            <div class="col-sm boxed">
            Insert Event
            </div>
        </div>
        

        <div class="row">
            <div class="col-sm-12 boxed">
            <MDBNavbarLink href='/currentaffairs' style={{color:'black'}}>Current Affairs</MDBNavbarLink>
            </div>

        <div class="row">
            <div class="col-sm-12 boxed">
                    <MDBNavbarLink href='/beneficiarieslist' style={{color:'black'}}>Beneficiaries of Ongoing Causes</MDBNavbarLink>
                </div>
            </div>
        </div>

        </div>

    </MDBContainer>
    );
}

export default Donation;