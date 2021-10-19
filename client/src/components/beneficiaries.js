import React, { useEffect, useState } from 'react';
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

import "./findoutmore.css"
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import beneficiaryimage from "./beneficiaryimage";


function Beneficiary(){
    


    const [showNavSecond, setShowNavSecond] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    useEffect( ()=>{
        axios.get('/beneficiary')
        .then(response => {
            setData(response.data);
            console.log(response.data)
        })
        // .catch(error=>{
        //     console.error("Error fetching data: ", error);
        //     setError(error);
        // })
    
        // .finally(()=>{
        //     setLoading(false);
        // })
    }, []);
    
    const randomImage = beneficiaryimage[Math.floor(Math.random() * beneficiaryimage.length)];

    return ( 

        
        
        <MDBContainer fluid>
        <NavBar></NavBar>
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">Beneficiaries</a>
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
                {data.map( (beneficiary) => (
                    <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
                        <MDBCard style={{ maxWidth: '22rem' }}>
                            <MDBCardImage src={randomImage} position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>{beneficiary.bname}</MDBCardTitle>
                                <MDBCardText>
                                {beneficiary.description}
                                </MDBCardText>
                                <MDBBtn href='#' onClick={togglePopup}>Visit</MDBBtn>
                
                                {isOpen && <Popup
                                content={<>
                                    <b>{beneficiary.bname}</b>
                                    <ul>
                                        <li>{beneficiary.cause}</li>
                                        <li>{beneficiary.amtdonated}</li>
                                        <li>{beneficiary.url}</li>
                                    </ul>
                                    <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
                                </>}
                                handleClose={togglePopup}
                                />}

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))}
                
            

            {/* <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3'>
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


            </MDBCol> */}

        </MDBRow>

        </MDBContainer>

        );
}

export default Beneficiary;