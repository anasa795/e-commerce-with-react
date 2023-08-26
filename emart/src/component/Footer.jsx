import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';






const Footer = () => {
   return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom container'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="fa fa-google" aria-hidden="true"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Online Shop
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            

            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Cairo, NY 10012, Egypt
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +20 010 699 846 70
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" />  +20 010 699 846 70
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright: Ahmed Anas
        
      </div>
    </MDBFooter>
  );
}


export default Footer