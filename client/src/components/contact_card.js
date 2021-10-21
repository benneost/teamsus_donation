import React from "react";
import Avatar from "./contact_dp";
import Detail from "./contact_detail";
import { MDBBtn,MDBNavbarLink, MDBContainer, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import NavBar from "./navbar";

function Card(props) {
  return (
    <MDBContainer fluid>
    <NavBar></NavBar>
    <div class="col-sm-6">
    
        <MDBCard style={{margin:'30px'}}>
                    <MDBNavbarLink href='/payment'>
                        <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/photo-of-woman-wearing-yellow.jpg' width = '300px' position='top' alt='...' /></MDBNavbarLink>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>Tanya</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>+65 9876 5432</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
        </div>
        
        <div class="col-sm-6">
        
            <MDBCard style={{margin:'30px'}}>
            <MDBNavbarLink href='/payment2'><img src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" width = '300px' position='top' alt='...' /></MDBNavbarLink>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>Benjamin</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>+65 9123 4567</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
        </div>

        <div class="col-sm-6">
        
        <MDBCard style={{margin:'30px'}}>
        <MDBNavbarLink href='/payment3'><img src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" width = '300px' position='top' alt='...' /></MDBNavbarLink>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>Eric</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>+65 8765 4321</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
        </div>

        
    <div
        style={{ height: '100vh', marginTop: '120px'}}
        className= 'px-4 d-flex align-items-baseline justify-content-center'
    >
        
    </div>
    </MDBContainer>
  );
}

export default Card;




