import React from 'react';
import { MDBBtn, MDBContainer, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';


function Rewards() {
    const history = useHistory();

    return (
    
    <MDBContainer fluid>
    <title>Rewards</title>
    {/* this is the navbar thats imported from the respective navbar js*/}
    {/* <LearnerNavbar/> */}

    {/* can edit whatever u want here */}
    <div
        style={{ height: '100vh', marginTop: '120px'}}
        className= 'px-4 d-flex align-items-baseline justify-content-center'
    >
        
        // {/* Rewards section */}
        <div className='py-4'>
            <div>
                <h5 className='mb-3 py-4'>
                <b>Rewards</b>
                </h5>
                <MDBCol>
                <MDBRow sm='4' style={{marginBottom: '10px', maxWidth: '22rem'}}>
                    <MDBCard onClick={() => history.push('/redemption')}>
                    <MDBCardImage src='https://images.deliveryhero.io/image/fd-th/LH/w7wn-hero.jpg' position='top' alt='...' />
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>$2 off Koi</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>3,000 points</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                <MDBRow sm='4' style={{marginBottom: '10px', maxWidth: '22rem'}}>
                    <MDBCard>
                    <MDBCardImage src='https://images.dailyhive.com/20191119104317/food_with_howie.jpeg' position='top' alt='...' />
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>1 Free Milk Tea at GongCha</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>5,000 points</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                <MDBRow sm='4' style={{marginBottom: '10px', maxWidth: '22rem'}}>
                    <MDBCard>
                    <MDBCardImage src='https://www.8days.sg/image/12680056/16x9/1920/1080/4386bc4300a3f41c2206e3789e168897/XS/liho-diy5.jpg' position='top' alt='...' />
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>$2 off LiHo</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>2,000 points</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                <MDBRow sm='4' style={{marginBottom: '10px', maxWidth: '22rem'}}>
                    <MDBCard>
                    <MDBCardImage src='https://static.straitstimes.com.sg/s3fs-public/articles/2019/02/12/colin-cd-12.jpg' position='top' alt='...' />
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>$5 off An Acai Affair</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>5,000 points</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
                </MDBRow>
                <MDBRow sm='4' style={{marginBottom: '10px', maxWidth: '22rem'}}>
                    <MDBCard>
                    <MDBCardImage src='https://www.capitaland.com/content/dam/capitaland-media-library/retail/Singapore/Singapore/Plaza%20Singapura/yakun%20carousel.jpg.transform/cap-midres/image.jpg' position='top' alt='...' />
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>$2 off Set Meal at Ya Kun</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>1,500 points</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
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



{/* <MDBRow sm='4' style={{marginBottom: '10px'}}>
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
                </MDBRow> */}