import React from 'react';
import { MDBBtn, MDBContainer, MDBInput ,MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import Card from "./contact_card";
import Contacts from "../contact_info";

function createCard(contact) {
    return(
    <div>
    {/* <Card 
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    /> */}
    <h1 className="text-center">My Contacts</h1>
  
    {Contacts.map(Card)}
    </div>
  ); 
}
export default createCard;



