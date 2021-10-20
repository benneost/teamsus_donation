import React, { useState, useEffect } from 'react';
import { MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBDropdown, MDBBtn, MDBContainer, MDBInput ,MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle, MDBNavbarLink} from 'mdb-react-ui-kit';
import "./styles.css";
import axios from 'axios';
import Popup from './popup';
import NavBar from './navbar';
import "./payment_page.css";

function PaymentComplete() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(null);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [amountSend, setAmountSend] = useState('')


    return (
    <MDBContainer fluid>
    <NavBar></NavBar>
    <title>Payment</title>
    <div
        style={{ height: '100vh', marginTop: '120px'}}
        className= 'px-4 d-flex align-items-baseline justify-content-center'>
        
        <MDBCard>
            
            <MDBCardBody>
                <MDBCardTitle>asd</MDBCardTitle>
                <MDBCardText>
                asd
                </MDBCardText>
                <MDBBtn  href='/payment'>Donate</MDBBtn>
            </MDBCardBody>
      </MDBCard>
    </div>
    </MDBContainer>
    );
}
export default PaymentComplete;
