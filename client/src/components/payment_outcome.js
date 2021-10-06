import React from 'react';
import { MDBBtn, MDBContainer, MDBInput ,MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';


function Payment_outcome() {
    return (
    
    <MDBContainer fluid>
    <title></title>
    {/* this is the navbar thats imported from the respective navbar js*/}
    {/* <LearnerNavbar/> */}

    {/* can edit whatever u want here */}
    <div
        style={{ height: '100vh', marginTop: '120px'}}
        className= 'px-4, center'
    >
        
        {/* Rewards section */}
        <div className='text-center'>
            <div>
                <h5 className='mb-3 py-4'>
                <b>Success!!</b>
                </h5>
            </div>
        </div>
    </div>
    </MDBContainer>
    );
}

export default Payment_outcome;
