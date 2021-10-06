import React from 'react';
import { MDBBtn, MDBContainer, MDBInput ,MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';


function Payment() {
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
                <b>Payment</b>
                </h5>
                    <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/photo-of-woman-wearing-yellow.jpg' className='img-fluid rounded-circle' sm='4' style={{maxWidth: '7rem'}} alt='...' />
                    <h6>Erica Gomez</h6>
                    <MDBInput label='Amount' id='form1' type='text'/>    
                    <MDBBtn style={{marginTop: '10px'}}>Pay</MDBBtn>
            </div>
        </div>
    </div>
    </MDBContainer>
    );
}

export default Payment;
