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
import beneficiaryimage from "./beneficiaryimage";

function Donation() {

    const randomImage = beneficiaryimage[Math.floor(Math.random() * beneficiaryimage.length)];


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
            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src={randomImage} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>asd</MDBCardTitle>
                        <MDBCardText>
                        asd
                        </MDBCardText>
                        <MDBBtn  href='/payment'>Donate</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
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
                    <MDBNavbarLink href='/beneficiaries' style={{color:'black'}}>Beneficiaries of Ongoing Causes</MDBNavbarLink>
                </div>
            </div>
        </div>

        </div>

    </MDBContainer>
    );
}

export default Donation;