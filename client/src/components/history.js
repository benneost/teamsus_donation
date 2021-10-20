import React, { useState, useEffect } from 'react';
import Popup from './popup';
import { MDBBtn, MDBContainer, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle, MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';
import NavBar from "./navbar";
import "./home.css";

import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function History() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect( ()=>{
        axios.get('/payment')
        .then(response => {
            setData(response.data);
            console.log(response.data)
        })
    }, []);

    return (
    <MDBContainer fluid>
    <NavBar></NavBar>


    <MDBTable striped hover>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Beneficiary</th>
          <th scope='col'>Amount</th>
          <th scope='col'>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map( (payment) => (
            <tr>
            <th scope='row'>{payment.paymentid}</th>
            <td>Amref Health Africa</td>
            <td>$ {payment.amount}</td>
            <td>{payment.status}</td>
            </tr>
        ))}
      </MDBTableBody>
    </MDBTable>

    </MDBContainer>
    );
}

export default History;

{/* <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}