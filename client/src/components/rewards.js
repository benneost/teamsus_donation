import React from 'react';
import { MDBBtn, MDBContainer, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';


function Rewards() {
    return (
    
    <MDBContainer fluid>
    <title>Rewards</title>
    {/* this is the navbar thats imported from the respective navbar js*/}
    {/* <LearnerNavbar/> */}

    {/* can edit whatever u want here */}
    <div
        style={{ height: '100vh', marginTop: '120px'}}
        className= 'px-4, center'
    >
        
        // {/* Rewards section */}
        <div className='py-4'>
            <div>
                <h5 className='mb-3 py-4'>
                <b>Rewards</b>
                </h5>
                <MDBCol>
                <MDBRow sm='4' style={{marginBottom: '10px', maxWidth: '22rem'}}>
                    <MDBCard>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg' position='top' alt='...' />
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '10px'}}>$2 off Koi</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>2,000 points</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                <MDBRow sm='4' style={{marginBottom: '10px'}}>
                    <MDBCard>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '10px'}}><MDBIcon className='ms-1' icon='database' size='2x' /></MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Database</MDBCardSubTitle>
                        <MDBBtn href='#'>Go to Course</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                <MDBRow sm='4' style={{marginBottom: '10px'}}>
                    <MDBCard>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '10px'}}><MDBIcon className='ms-1' icon='code' size='2x' /></MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Coding</MDBCardSubTitle>
                        <MDBBtn sm='2' href='#'>Go to Course</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                <MDBRow sm='4' style={{marginBottom: '10px'}}>
                    <MDBCard>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '10px'}}><MDBIcon className='ms-1' icon='camera' size='2x' /></MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Photography</MDBCardSubTitle>
                        <MDBBtn href='#'>Go to Course</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                </MDBCol>
            </div>
        </div>

        
    </div>
    </MDBContainer>
    );
}

export default Rewards;
