import React from 'react';
import { MDBBtn, MDBContainer, MDBInput ,MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import Card from "./contact_card";
import Contacts from "../contact_info";

function createCard(contact) {
    return(
    <div>
    {Contacts.map(Card)}
    </div>
  ); 
}
export default createCard;



