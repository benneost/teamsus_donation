import React from 'react';
import { MDBBtn, MDBContainer, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRow, MDBCol, MDBCardSubTitle } from 'mdb-react-ui-kit';
import LearnerNavbar from '../components/LearnerNavbar';

function LearnerHome() {
  return (
    
    <MDBContainer fluid>
      <title>SPM LEARNER HOMEPAGE</title>
      {/* this is the navbar thats imported from the respective navbar js*/}
      <LearnerNavbar/>

      {/* can edit whatever u want here */}
      <div
        style={{ height: '100vh', marginTop: '120px'}}
        className= 'px-4'
      >
        
        {/* Course section */}
        <div className='py-4'>
          <div>
            <h5 className='mb-3 py-4'>
              <b>My Courses</b>
            </h5>
            <MDBRow>
              <MDBCol sm='4' style={{marginBottom: '10px'}}>
                <MDBCard>
                  <MDBCardBody className='text-center'>
                    <MDBCardTitle style={{ paddingTop: '10px'}}><MDBIcon className='ms-1' icon='desktop' size='2x' /></MDBCardTitle>
                    <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Web Development</MDBCardSubTitle>
                    <MDBBtn href='#'>Go to Course</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='4' style={{marginBottom: '10px'}}>
                <MDBCard>
                  <MDBCardBody className='text-center'>
                    <MDBCardTitle style={{ paddingTop: '10px'}}><MDBIcon className='ms-1' icon='database' size='2x' /></MDBCardTitle>
                    <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Database</MDBCardSubTitle>
                    <MDBBtn href='#'>Go to Course</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='4' style={{marginBottom: '10px'}}>
                <MDBCard>
                  <MDBCardBody className='text-center'>
                    <MDBCardTitle style={{ paddingTop: '10px'}}><MDBIcon className='ms-1' icon='code' size='2x' /></MDBCardTitle>
                    <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Coding</MDBCardSubTitle>
                    <MDBBtn sm='2' href='#'>Go to Course</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='4' style={{marginBottom: '10px'}}>
                <MDBCard>
                  <MDBCardBody className='text-center'>
                    <MDBCardTitle style={{ paddingTop: '10px'}}><MDBIcon className='ms-1' icon='camera' size='2x' /></MDBCardTitle>
                    <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Photography</MDBCardSubTitle>
                    <MDBBtn href='#'>Go to Course</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>

          {/* Assessments section */}
          <div className='py-4'>
            <h5 className='mb-3 py-4'>
            <b>My Assessments</b>
            </h5>
            <MDBRow>
              <MDBCol sm='6' style={{ maxWidth: '60rem', marginBottom: '10px'}}>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Web Development</MDBCardTitle>
                    <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Due on 26/9/2021</MDBCardSubTitle>
                    <MDBCardText style={{ paddingTop: '10px', paddingBottom: '10px'}}>
                      Instructions: Please submit the assignment in a zip file with the necessary files
                    </MDBCardText>
                    <MDBBtn href='#'>Go submission page</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='6' style={{ maxWidth: '60rem', marginBottom: '10px'}}>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Database</MDBCardTitle>
                    <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Due on 26/9/2021</MDBCardSubTitle>
                    <MDBCardText style={{ paddingTop: '10px', paddingBottom: '10px'}}>
                      Instructions: Please submit the assignment in a zip file with the necessary files
                    </MDBCardText>
                    <MDBBtn href='#'>Go submission page</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='6' style={{ maxWidth: '60rem', marginBottom: '10px'}}>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Coding</MDBCardTitle>
                    <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Due on 26/9/2021</MDBCardSubTitle>
                    <MDBCardText style={{ paddingTop: '10px', paddingBottom: '10px'}}>
                      Instructions: Please submit the assignment in a zip file with the necessary files
                    </MDBCardText>
                    <MDBBtn href='#'>Go submission page</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='6' style={{ maxWidth: '60rem', marginBottom: '10px'}}>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Photography</MDBCardTitle>
                    <MDBCardSubTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Due on 26/9/2021</MDBCardSubTitle>
                    <MDBCardText style={{ paddingTop: '10px', paddingBottom: '10px'}}>
                      Instructions: Please submit the assignment in a zip file with the necessary files
                    </MDBCardText>
                    <MDBBtn href='#'>Go to submission page</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>

          {/* Announcement section */}
          <div className='py-4'>
            <MDBRow>
              <MDBCol>
                <h5 className='mb-3 py-4'>
                <b>Announcements</b>
                </h5>
              </MDBCol>
              <MDBCol sm='4'>
                <form className='d-flex input-group w-auto mb-3 py-4'>
                <input type='search' className='form-control' placeholder='Search Announcements' aria-label='Search' />
                <MDBBtn color='primary'>Search</MDBBtn>
                </form>
              </MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol sm='4' style={{ marginBottom: '10px'}}>
                <MDBCard>
                  <MDBCardBody className='text-center'>
                    <MDBCardTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Web Development</MDBCardTitle>
                    <MDBCardText style={{ paddingTop: '10px', paddingBottom: '10px'}}>
                      Exam on 19/10/2021. Please be reminded to study and study and study and study to prepare for the exams.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol sm='4' style={{marginBottom: '10px'}}>
                <MDBCard>
                  <MDBCardBody className='text-center'>
                    <MDBCardTitle style={{ paddingTop: '10px', paddingBottom: '10px'}}>Coding</MDBCardTitle>
                    <MDBCardText style={{ paddingTop: '10px', paddingBottom: '10px'}}>
                      Exam on 19/10/2021. Please be reminded to study and study and study and study to prepare for the exams.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>

        </div>
      </div>
    </MDBContainer>
  );
}

export default LearnerHome;
