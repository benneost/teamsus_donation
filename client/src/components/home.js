import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

function Home() {
    return (
    
    <MDBContainer fluid>
    <title>Home Page</title>
    <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}
    >
        <div className='text-center'>
        <img
            className='mb-4'
            src='https://mdbootstrap.com/img/logo/mdb-transparent-250px.png'
            style={{ width: 250, height: 90 }}
        />
        <h5 className='mb-3'>
            THIS IS THE Home PAGE
        </h5>
        <MDBBtn
            tag='a'
            href='/beneficiary'
            // target='_blank'
            role='button'
            style={{margin: 10}}
        >
            Beneficiaries
        </MDBBtn>
        <MDBBtn
            tag='a'
            href='/rewards'
            // target='_blank'
            role='button'
            style={{margin: 10}}
        >
            Rewards
        </MDBBtn>
        <MDBBtn
            tag='a'
            href='/payment'
            // target='_blank'
            role='button'
            style={{margin: 10}}
        >
            Payment
        </MDBBtn>
        <MDBBtn
            tag='a'
            href='/contact'
            // target='_blank'
            role='button'
            style={{margin: 10}}
        >
            Contacts
        </MDBBtn>
        </div>
    </div>
    </MDBContainer>
    );
}

export default Home;