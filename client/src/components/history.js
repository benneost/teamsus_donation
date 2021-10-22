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
          <tr>
            <th scope='row'>1</th>
            <td>Planned Parenthood Great Plains</td>
            <td>$0.30</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>2</th>
            <td>Hindu American Foundation</td>
            <td>$ 0.30</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>3</th>
            <td>Longyear Museum</td>
            <td>$ 0.20</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>4</th>
            <td>Longyear Museum</td>
            <td>$ 0.50</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>5</th>
            <td>Hindu American Foundation</td>
            <td>$ 0.10</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>6</th>
            <td>Mentis</td>
            <td>$ 0.35</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>7</th>
            <td>Nine Network of Public Media</td>
            <td>$ 0.20</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>8</th>
            <td>Mentis</td>
            <td>$ 0.55</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>9</th>
            <td>Summit Academy OIC</td>
            <td>$ 0.25</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>10</th>
            <td>Summit Academy OIC</td>
            <td>$ 0.50</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>11</th>
            <td>Hindu American Foundation</td>
            <td>$ 0.15</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>12</th>
            <td>Mentis</td>
            <td>$ 0.80</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>13</th>
            <td>Mentis</td>
            <td>$ 0.65</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>14</th>
            <td>Project Extreme</td>
            <td>$ 0.45</td>
            <td>Successful</td>
          </tr>

          <tr>
            <th scope='row'>15</th>
            <td>Mentis</td>
            <td>$ 0.30</td>
            <td>Successful</td>
          </tr>

        {/* {data.map( (payment) => (
            <tr>
            <th scope='row'>{payment.paymentid}</th>
            <td>Planned Parenthood Great Plains</td>
            <td>$ {payment.amount}</td>
            <td>{payment.status}</td>
            </tr>
        ))} */}
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