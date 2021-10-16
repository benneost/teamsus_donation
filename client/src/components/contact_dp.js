import React from "react";
import { MDBBtn, MDBContainer, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';


function Avatar(props) {
  return <MDBCardImage className='text-center' src={props.imgURL} alt="avatar_img" />;
}

export default Avatar;



