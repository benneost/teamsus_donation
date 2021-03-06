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
    <MDBContainer fluid class="bg">
    <NavBar></NavBar>

    <div class="container">
    <div class="row">
        <div id="card" class="col-sm-12" style={{width:'90%', marginTop:'10px'}}>
            <h3 className='text-center'>Card Amount: $100.34</h3>
        </div>
    </div>
        <h2 style={{marginLeft:'30px'}}>Recommended</h2>
        <div class="row">

    <MDBContainer>
      <MDBRow>
        <MDBCol size='md' className='col-example'>
        <MDBCard style={{width: '90%', margin: 'auto', marginBottom:'30px'}}>
                <MDBCardImage src={beneficiaryimage[0]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>National Foundation for Cancer Research</MDBCardTitle>
                    <MDBCardText>
                    Health: Diseases, Disorders and Disciplines
                  </MDBCardText>
                    <MDBBtn color='warning' style={{margin: '5px'}} href='#'>Visit</MDBBtn>
    
                    <MDBBtn color='success' style={{margin: '5px'}} href='#'>Donate</MDBBtn>        
            

        </MDBCardBody>
    </MDBCard>
        </MDBCol>
        <MDBCol size='md' className='col-example'>
        <MDBCard style={{ width: '90%', margin: 'auto', marginBottom:'30px' }}>
                <MDBCardImage src={beneficiaryimage[1]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Planned Parenthood Great Plains</MDBCardTitle>
                    <MDBCardText>
                    Health: Treatment and Prevention Services
                  </MDBCardText>
                    <MDBBtn color='warning' style={{margin: '5px'}} href='#'>Visit</MDBBtn>

                    <MDBBtn color='success' style={{margin: '5px'}} href='#'>Donate</MDBBtn>                 

        </MDBCardBody>
    </MDBCard>
        </MDBCol>
        <MDBCol size='md' className='col-example'>
        <MDBCard style={{ width: '90%', margin: 'auto', marginBottom:'30px' }}>
                <MDBCardImage src={beneficiaryimage[2]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Wayside Christian Mission</MDBCardTitle>
                    <MDBCardText>
                    Human Services: Homeless Services
                    </MDBCardText>
                    <MDBBtn color='warning' style={{margin: '5px'}} href='#'>Visit</MDBBtn>
    
                    
                    <MDBBtn color='success' style={{margin: '5px'}} href='#'>Donate</MDBBtn>                     

                </MDBCardBody>
            </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

        </div>

    <h2 style={{marginLeft:'30px'}}>Top 3 Trending</h2>
        <div class="row">

        <MDBContainer>
      <MDBRow>
        <MDBCol size='md' className='col-example'>
        <MDBCard style={{ width: '90%', margin: 'auto', marginBottom:'30px'}}>
                <MDBCardImage src={beneficiaryimage[3]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>East End House</MDBCardTitle>
                    <MDBCardText>
                    Human Services: Social Services
                    </MDBCardText>
                    <MDBBtn color='warning' style={{margin: '5px'}} href='#'>Visit</MDBBtn>
    
                    
                    <MDBBtn color='success' style={{margin: '5px'}} href='#'>Donate</MDBBtn>                     

                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol size='md' className='col-example'>
        <MDBCard style={{ width: '90%', margin:'auto', marginBottom:'30px'}}>
                <MDBCardImage src={beneficiaryimage[4]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Longyear Museum</MDBCardTitle>
                    <MDBCardText>
                    Arts, Culture, Humanities: Museums
                    </MDBCardText>
                    <MDBBtn color='warning' style={{margin: '5px'}} href='#'>Visit</MDBBtn>
    
                    
                    <MDBBtn color='success' style={{margin: '5px'}} href='#'>Donate</MDBBtn>                     

                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol size='md' className='col-example'>
        <MDBCard style={{ width: '90%', margin:'auto', marginBottom:'30px' }}>
                <MDBCardImage src={beneficiaryimage[5]} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Foundation for Physical Therapy</MDBCardTitle>
                    <MDBCardText>
                    Health: Medical Research
                    </MDBCardText>
                    <MDBBtn color='warning' style={{margin: '5px'}} href='#'>Visit</MDBBtn>
    
                    
                    <MDBBtn color='success' style={{margin: '5px'}} href='#'>Donate</MDBBtn>                     

                </MDBCardBody>
            </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

            
        </div>
        

        <div class="row">
            <div class="col-sm-12 boxed" style={{width: '96%', margin: 'auto', marginBottom: '10px'}}>
            <MDBNavbarLink href='/currentaffairs' style={{color:'white'}}>Current Affairs</MDBNavbarLink>
            </div>
            
            <div class="col-sm-12 boxed" style={{width: '96%', margin: 'auto', marginBottom: '10px'}}>
                    <MDBNavbarLink href='/beneficiaries' style={{color:'white'}}>Beneficiaries of Ongoing Causes</MDBNavbarLink>
            </div>
            </div>
        </div>
        <br></br>
    </MDBContainer>
    );
}

export default Donation;