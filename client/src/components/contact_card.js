import React from "react";
import Avatar from "./contact_dp";
import Detail from "./contact_detail";
import { MDBBtn, MDBContainer, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';

function Card(props) {
  return (
    <div className="card">
      <div className="top">
      <MDBRow sm='4' style={{marginBottom: '10px', maxWidth: '22rem'}}>
      <MDBCard>
        <p>{props.id}</p>
        <MDBCardBody className='text-center'> {props.name}</MDBCardBody>
        <Avatar imgURL={props.imgURL} />
        </MDBCard>
        </MDBRow>
      </div>
      <div className='text-center'>
      <MDBCardSubTitle style={{ paddingTop: '5px', paddingBottom: '5px'}}>
        <Detail detailInfo={props.phone} />
        <Detail detailInfo={props.email} />
    </MDBCardSubTitle>
      </div>
    </div>
  );
}

export default Card;




