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

import "./findoutmore.css"
import "bootstrap/dist/css/bootstrap.css";

function Beneficiary(){
    const [showNavSecond, setShowNavSecond] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return ( 

        <MDBContainer>
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
                <MDBNavbarLink href='/home'>
                Home
                </MDBNavbarLink>
                <MDBNavbarLink href='/profile'>Profile</MDBNavbarLink>
                <MDBNavbarLink active aria-current='page' href='/beneficiary'>Donation</MDBNavbarLink>
                <MDBNavbarLink href='/rewards'>Rewards</MDBNavbarLink>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>

        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">Current Affairs</a>
            <form class="d-flex input-group w-auto">
            <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
            </span>
            </form>
        </div>
        </nav>

        <MDBRow>
            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Beneficiary Name</MDBCardTitle>
                        <MDBCardText>
                        Insert text on beneficiary information, cause, impact, amount of donations made etc.
                        </MDBCardText>
                        <MDBBtn href='#' onClick={togglePopup}>Find Out More</MDBBtn>
        
                        {isOpen && <Popup
                        content={<>
                            <b>Beneficiary Name</b>
                            <ul>
                                <li>Cause</li>
                                <li>Actions Taken (eg. with donation etc.)</li>
                                <li>Amount Received</li>
                            </ul>
                            <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                        </>}
                        handleClose={togglePopup}
                        />}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>


        </MDBRow>
        </MDBContainer>

        );
}

export default Beneficiary;