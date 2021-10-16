import React from 'react';
import { MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBDropdown, MDBBtn, MDBContainer, MDBInput ,MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import "./styles.css";

function Payment() {
    return (
    
    <MDBContainer fluid>
    <title>Payment</title>
    {/* this is the navbar thats imported from the respective navbar js*/}
    {/* <LearnerNavbar/> */}

    {/* can edit whatever u want here */}
    <div
        style={{ height: '100vh', marginTop: '120px'}}
        className= 'px-4 d-flex align-items-baseline justify-content-center'>
        <div className='text-center'>
            <div>
                <h5 className='mb-3 py-4'>
                <b>Payment</b>
                </h5>
                    <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/photo-of-woman-wearing-yellow.jpg' className='img-fluid rounded-circle' sm='4' style={{maxWidth: '7rem'}} alt='...' />
                    <h6 style={{marginTop: '10px'}}>Tanya</h6>
        <MDBCard
        padding={4}
        marginTop="27px"
        width="500px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderWidth="2px"
        borderRadius="lg">
        {/* <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/photo-of-woman-wearing-yellow.jpg' className='img-fluid rounded-circle' sm='4' style={{maxWidth: '7rem'}} alt='...' />
        <h6>Tanya</h6> */}
        <MDBCardText fontWeight="bold">Enter Amount:</MDBCardText>
        <div className="form-group" style={{marginLeft: '20px', marginRight:'20px'}}> 
        <MDBInput label="Amount"/>
        </div>
        <div className="justify-content-center">
        <MDBBtn onClick={()=> alert("Payment Success")}
          style={{
            backgroundColor: "#348ceb",
            color: "white",
            borderRadius: "3px",
            width: "130px",
            height: "31px",
            marginTop: '10px',
            marginBottom: '10px',
            alignItems: 'center',
            justifyContent:'center'
          }}>Pay</MDBBtn>
          </div>
      </MDBCard>
    </div>
    </div>
    </div>
    </MDBContainer>
    );
}
    // );
/* <MDBContainer fluid>
<MDBCol>
<MDBRow
      margin={4}
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      {/* <MDBCard
        padding={4}
        width="300px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderWidth="2px"
        borderRadius="lg">
        <MDBCardText fontWeight="bold">Credit/Debit Card Deposits</MDBCardText>
        <MDBDropdown placeholder="25$" width="270px" margin={3}>
        <MDBDropdownToggle caret color="primary">
        Amount
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
          <MDBDropdownItem>5$</MDBDropdownItem>
          <MDBDropdownItem>10$</MDBDropdownItem>
          <MDBDropdownItem>15$</MDBDropdownItem>
          <MDBDropdownItem>20$</MDBDropdownItem>
          <MDBDropdownItem>50$</MDBDropdownItem>
          <MDBDropdownItem>75$</MDBDropdownItem>
          <MDBDropdownItem>100$</MDBDropdownItem>
          <MDBDropdownItem>250$</MDBDropdownItem>
          <MDBDropdownItem>400$</MDBDropdownItem>
        </MDBDropdownMenu>
        </MDBDropdown>
        <MDBBtn
          style={{ shape: "rect", size: "medium", margin: "1.5rem" }}
        />
      </MDBCard> */
//       <MDBCard
//         padding={4}
//         marginTop="27px"
//         width="300px"
//         flexDirection="column"
//         justifyContent="center"
//         alignItems="center"
//         borderWidth="2px"
//         borderRadius="lg">
//         <MDBCardText fontWeight="bold">Payment</MDBCardText>
//         <MDBDropdown placeholder="25$" width="270px" margin={3}>
//         <MDBDropdownToggle caret color="primary">
//         Amount
//       </MDBDropdownToggle>
//       <MDBDropdownMenu basic>
//           <option value="5$">5$</option>
//           <option value="10$">10$</option>
//           <option value="15$">15$</option>
//           <option value="20$">20$</option>
//           {/* <option value="25$">25$</option> */}
//           <option value="50$">50$</option>
//           <option value="75$">75$</option>
//           <option value="100$">100$</option>
//           <option value="250$">250$</option>
//           <option value="400$">400$</option>
//         </MDBDropdownMenu>
//         </MDBDropdown>
//         <MDBBtn
//           style={{

//             backgroundColor: "#348ceb",
//             color: "white",
//             borderRadius: "3px",
//             width: "130px",
//             height: "31px",
//             marginTop: '10px'
//           }}
//         >Pay</MDBBtn>
//       </MDBCard>
//     </MDBRow>
//     </MDBCol>
//     </MDBContainer>
export default Payment;
