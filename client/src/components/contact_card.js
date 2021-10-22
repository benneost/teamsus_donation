import React from "react";
import Avatar from "./contact_dp";
import Detail from "./contact_detail";
import { MDBBtn,MDBNavbarLink, MDBContainer, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import NavBar from "./navbar";
import './contact_page.css';

function Card(props) {
  return (
    <MDBContainer fluid class="bg">
    <NavBar></NavBar>
    <div class="text-center">
    
        <MDBCard class="hello" style={{margin:'50px', paddingTop: '20px'}}>
                    <MDBNavbarLink href='/payment'>
                        <img src='https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width='200px' className='img-fluid rounded-circle' border-radius = '50%' position='top' alt='...' /></MDBNavbarLink>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>Tanya</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>+65 9876 5432</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
        </div>
    
        <div class="text-center" >
        
            <MDBCard class="hello" style={{margin:'50px', paddingTop: '20px'}}>
            <MDBNavbarLink href='/payment2'><img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className='img-fluid rounded-circle' border-radius = '50%' width = '200px' position='top' alt='...' /></MDBNavbarLink>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>Benjamin</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>+65 9123 4567</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
        </div>
 
        <div class="text-center" >
        
        <MDBCard class="hello" style={{margin:'50px', paddingTop: '20px'}}>
        <MDBNavbarLink href='/payment3'><img src="https://images.unsplash.com/photo-1528341866330-07e6d1752ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjB3b21hbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className='img-fluid rounded-circle' border-radius = '50%' width = '200px' position='top' alt='...' /></MDBNavbarLink>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>Si Min</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>+65 9283 0313</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
        </div>
 
        <div class="text-center" >
        
        <MDBCard class="hello" style={{margin:'50px', paddingTop: '20px'}}>
        <MDBNavbarLink href='/payment3'><img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className='img-fluid rounded-circle' border-radius = '50%' width = '200px' position='top' alt='...' /></MDBNavbarLink>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>Hailey</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>+65 9201 8349</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
        </div>
 
        <div class="text-center" >
        
        <MDBCard class="hello" style={{margin:'50px', paddingTop: '20px'}}>
        <MDBNavbarLink href='/payment3'><img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className='img-fluid rounded-circle' border-radius = '50%' width = '200px' position='top' alt='...' /></MDBNavbarLink>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>Ng Jun Jie</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>+65 9248 9203</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
        </div>
 
        <div class="text-center" >
        
        <MDBCard class="hello" style={{margin:'50px', paddingTop: '20px'}}>
        <MDBNavbarLink href='/payment3'><img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW58ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className='img-fluid rounded-circle' border-radius = '50%' width = '200px' position='top' alt='...' /></MDBNavbarLink>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>Ashley</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>+65 8102 9283</MDBCardSubTitle>
                        {/* <MDBBtn href='#'>Go to Course</MDBBtn> */}
                    </MDBCardBody>
                    </MDBCard>
        </div>
 
        <div class="text-center" >
        
        <MDBCard class="hello" style={{margin:'50px', paddingTop: '20px'}}>
        <MDBNavbarLink href='/payment3'><img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className='img-fluid rounded-circle' border-radius = '50%' width = '200px' position='top' alt='...' /></MDBNavbarLink>
                    <MDBCardBody className='text-center'>
                        <MDBCardTitle style={{ paddingTop: '5px'}}>Matt</MDBCardTitle>
                        <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>+65 9247 8137</MDBCardSubTitle>
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




