import React, { useEffect, useState } from 'react';
import Popup from './popup';
import { MDBBtn, MDBContainer, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle, MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router-dom';
import NavBar from "./navbar";

import "./findoutmore.css"
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import beneficiaryimage from "./beneficiaryimage";


function Beneficiary(){
    


    const [showNavSecond, setShowNavSecond] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    useEffect( ()=>{
        axios.get('/beneficiary')
        .then(response => {
            setData(response.data);
            console.log(response.data)
        })
        // .catch(error=>{
        //     console.error("Error fetching data: ", error);
        //     setError(error);
        // })
    
        // .finally(()=>{
        //     setLoading(false);
        // })
    }, []);
    
    const randomImage = Math.floor(Math.random() * beneficiaryimage.length);

    return ( 

        
        
        <MDBContainer fluid>
        <NavBar></NavBar>
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">Beneficiaries</a>
            <form class="d-flex input-group w-auto">
            <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
            </span>
            </form>
        </div>
        </nav>

        <MDBRow>
                {data.map( (beneficiary) => (
                    <MDBCol size='md' className='col-lg-3 col-md-4 col-sm-6 py-3 d-flex align-items-stretch'>
                        <MDBCard style={{ width: '85%', margin: 'auto'}}>
                            <MDBCardImage src={beneficiaryimage[Math.floor(Math.random() * beneficiaryimage.length)]} position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle>{beneficiary.bname}</MDBCardTitle>
                                <MDBCardText>
                                {beneficiary.description}
                                </MDBCardText>
                                <MDBBtn  href='/paymentcomplete'>Donate</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))}
                
        </MDBRow>

        </MDBContainer>

        );
}

export default Beneficiary;


// {isOpen && <Popup
//     content={<>
//         <b>{beneficiary.bname}</b>
//         <ul>
//             <li>{beneficiary.cause}</li>
//             <li>{beneficiary.amtdonated}</li>
//             <li>{beneficiary.url}</li>
//         </ul>
//         <button type="button" class="btn btn-success btn-rounded px-4">Donate</button>
//     </>}
//     handleClose={togglePopup}
//     />}