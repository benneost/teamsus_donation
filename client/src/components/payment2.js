import React, { useState, useEffect } from 'react';
import { MDBNavbarLink, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBDropdown, MDBBtn, MDBContainer, MDBInput ,MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import "./styles.css";
import axios from 'axios';
import Popup from './popup';
import NavBar from './navbar';
import "./payment_page.css";

function Payment2() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(null);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [amountSend, setAmountSend] = useState('')


    const handleChange = (event) => {
        setAmountSend(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload={amount:amountSend,
                       beneficiaryid: '3',
                       userid: '1'
                    }
        axios.post('payment/add', payload)
          .then(function (response) {
              console.log(response)
              togglePopup()
          })
          .catch(function (error) {
              console.log(error)
          }) 
        }

    return (
    <MDBContainer fluid class="bg">
    <NavBar></NavBar>
    <title>Payment</title>
    <div
        style={{ height: '100vh', marginTop: '120px'}}
        className= 'px-4 d-flex align-items-baseline justify-content-center'>
        <form onSubmit={handleSubmit}>
        <div className='text-center'>
            <div>
                {/* <h5 className='mb-3 py-4'>
                <b>Payment</b>
                </h5>
                    <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/photo-of-woman-wearing-yellow.jpg' className='img-fluid rounded-circle' sm='4' style={{maxWidth: '7rem'}} alt='...' />
                    <h6 style={{marginTop: '10px'}}>Tanya</h6> */}
        <MDBCard
        class="pcard"
        padding={4}
        marginTop="27px"
        width="500px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderWidth="2px"
        borderRadius="lg">
        <h5 className='mb-3 py-4'>
                <b>Payment</b>
                </h5>
                    <img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className='img-fluid rounded-circle' sm='4' style={{maxWidth: '10rem'}} alt='...' />
                    <h6 style={{marginTop: '20px'}}>Benjamin</h6>
        <MDBCardText fontWeight="bold">Enter Amount:</MDBCardText>
        <div className="form-group" style={{marginLeft: '20px', marginRight:'20px'}}> 
        <MDBInput label="Amount" type="text" onChange={(event)=>handleChange(event)}/>
        </div>
        <div className="justify-content-center">
        <MDBBtn href='#'
          style={{
            backgroundColor: "#104046",
            color: "white",
            borderRadius: "3px",
            width: "50%",
            padding: 'auto',
            paddingTop: '8px',
            height: "31px",
            marginTop: '10px',
            marginBottom: '10px',
            alignItems: 'center',
            justifyContent:'center'
          }} 
          onClick={togglePopup}>Pay</MDBBtn>
          {isOpen && <Popup
                        content={<>
                            <h5>Payment Amount: $11.20</h5><br></br>
                            <h3>Rounded Amount: $12.00</h3><br></br>
                            <h5>Amount Donated: $0.80</h5><br></br>

                            <br></br>
                            
                            <button type="button" class="btn btn-success btn-rounded px-4" style={{margin: '5px'}}><MDBNavbarLink href='/donation' className='text-white'>Donate</MDBNavbarLink></button>
                        </>}
                        />}
          </div>
      </MDBCard>
    </div>
    </div>
    </form>
    </div>
    </MDBContainer>
    );
}
export default Payment2;
