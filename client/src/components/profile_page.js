import React, { Component } from 'react'
import { MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBDropdown, MDBBtn, MDBContainer, MDBInput ,MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import NavBar from "./navbar";
 
function Profile() {
  return (
    <MDBContainer fluid class="bg">
      <NavBar></NavBar>
      <div className= 'px-4 align-items-baseline justify-content-center'>
  
    <MDBRow>
      <MDBCol md="6" lg="4">
        <MDBCard personal className="my-5">
          <MDBCardImage
            top
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
            alt="MDBCard image cap"
          />
          <MDBCardBody>
            <MDBCardTitle>
              <a href="#!" className="title-one">
                Clara
              </a>
            </MDBCardTitle>
            <p className="card-meta">Joined in 2021</p>
            <h5>5329 Points</h5>
            {/* <MDBCardText></MDBCardText> */}
            <hr />
            <a href="#!" className="card-meta">
            <a>Gender</a>
            <MDBInput label="Female" hint="Disabled input" disabled type="name"/>
            <a>Age</a>
            <MDBInput label="23" hint="Disabled input" disabled type="name"/>
            <a>Address</a>
            <MDBInput label="10 Kan Cheong Rd" hint="Disabled input" disabled type="name" />
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    
    </div>
    </MDBContainer>
  );
}
 
export default Profile