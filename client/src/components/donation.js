import React, { useState } from 'react';
import Popup from './popup';

import { MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
    MDBBtn, MDBContainer, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle, MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';
import NavBar from "./navbar";
import "./home.css";
import "./donation.css";

import "bootstrap/dist/css/bootstrap.css";
import beneficiaryimage from "./beneficiaryimage";

function Donation() {

    const randomImage = beneficiaryimage[Math.floor(Math.random() * beneficiaryimage.length)];

    const i = 0;


    return (
    <MDBContainer fluid>
    <NavBar></NavBar>

    <div class="container">
    <div class="row">
        <div id="card" class="col-sm-12" style={{width:'100%', marginTop:'10px'}}>
            <h3 className='text-center'>Card Amount: $100.34</h3>
        </div>
    </div>
        Recommended
        <div class="row">

        <MDBCarousel showIndicators showControls fade>
        <MDBCarouselInner>
            <MDBCarouselItem className='active'>
            <MDBCard style={{width: '100%', margin: '20px'}}>
                <MDBCardImage src={beneficiaryimage[0]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>National Foundation for Cancer Research</MDBCardTitle>
                    <MDBCardText>
                    Health: Diseases, Disorders and Disciplines
                    </MDBCardText>
                    <MDBBtn style={{margin: '5px'}} href='#'>Visit</MDBBtn>
    
                    
            <button type="button" class="btn btn-success btn-rounded px-4" style={{margin: '5px'}}>Donate</button>
            

        </MDBCardBody>
    </MDBCard>
    </MDBCarouselItem>

            <MDBCarouselItem>
            <MDBCard style={{ width: '100%', margin: '10px' }}>
                <MDBCardImage src={beneficiaryimage[1]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Planned Parenthood Great Plains</MDBCardTitle>
                    <MDBCardText>
                    Health: Treatment and Prevention Services
                    </MDBCardText>
                    <MDBBtn style={{margin: '5px'}} href='#'>Visit</MDBBtn>
    
                    
                <button type="button" class="btn btn-success btn-rounded px-4" style={{margin: '5px'}}>Donate</button>
                

        </MDBCardBody>
    </MDBCard>
    </MDBCarouselItem>

            <MDBCarouselItem>
            <MDBCard style={{ width: '100%', margin: '10px' }}>
                <MDBCardImage src={beneficiaryimage[2]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Wayside Christian Mission</MDBCardTitle>
                    <MDBCardText>
                    Human Services: Homeless Services
                    </MDBCardText>
                    <MDBBtn style={{margin: '5px'}} href='#'>Visit</MDBBtn>
    
                    
                    <button type="button" class="btn btn-success btn-rounded px-4" style={{margin: '5px'}}>Donate</button>
                    

                </MDBCardBody>
            </MDBCard>
            </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
        
        </div>

        Your Top Picks
        <div class="row">
            <div class="col-sm d-flex align-items-stretch">
            <MDBCard style={{ width: '33%', margin: '10px' }}>
                <MDBCardImage src={beneficiaryimage[3]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>East End House</MDBCardTitle>
                    <MDBCardText>
                    Human Services: Social Services
                    </MDBCardText>
                    <MDBBtn style={{margin: '5px'}} href='#'>Visit</MDBBtn>
    
                    
                    <button type="button" class="btn btn-success btn-rounded px-4" style={{margin: '5px'}}>Donate</button>
                    

                </MDBCardBody>
            </MDBCard>
            
            <MDBCard style={{ width: '33%', margin: '10px'}}>
                <MDBCardImage src={beneficiaryimage[4]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Longyear Museum</MDBCardTitle>
                    <MDBCardText>
                    Arts, Culture, Humanities: Museums
                    </MDBCardText>
                    <MDBBtn style={{margin: '5px'}} href='#'>Visit</MDBBtn>
    
                    
                    <button type="button" class="btn btn-success btn-rounded px-4" style={{margin: '5px'}}>Donate</button>
                    

                </MDBCardBody>
            </MDBCard>
            
            <MDBCard style={{ width: '33%', margin: '10px' }}>
                <MDBCardImage src={beneficiaryimage[5]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Foundation for Physical Therapy</MDBCardTitle>
                    <MDBCardText>
                    Health: Medical Research
                    </MDBCardText>
                    <MDBBtn style={{margin: '5px'}} href='#'>Visit</MDBBtn>
    
                    
                    <button type="button" class="btn btn-success btn-rounded px-4" style={{margin: '5px'}}>Donate</button>
                    

                </MDBCardBody>
            </MDBCard>
            </div>
        </div>
        

        <div class="row">
            <div class="col-sm-12 boxed" style={{width: '96%'}}>
            <MDBNavbarLink href='/currentaffairs' style={{color:'white'}}>Current Affairs</MDBNavbarLink>
            </div>
            
            <div class="col-sm-12 boxed" style={{width: '96%'}}>
                    <MDBNavbarLink href='/beneficiaries' style={{color:'white'}}>Beneficiaries of Ongoing Causes</MDBNavbarLink>
            </div>
            </div>
        </div>
    </MDBContainer>
    );
}

export default Donation;