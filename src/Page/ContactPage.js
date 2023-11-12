import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarker, FaEnvelope, FaMobile, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div id="contact">
      <h2 style={{ fontSize: '2.5em', color: 'navy', textAlign: 'center', marginBottom: '0.5em', fontFamily: 'Courier, monospace', fontWeight: 'bold' }}>Contact</h2>

    <Container fluid className="bg-white text-dark p-4"> {/* Change bg-danger to bg-white */}
    
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <div>
            <h3>Let's get in touch</h3>
            <p>Contact us with the following details and fill up the form with the details.</p>
            <div className="d-flex align-items-center">
  <FaMapMarker className="icon mr-2" />
  <p style={{ margin: '0', marginLeft: '5px', color: 'blue' }}>NPM, NY, USA</p>
</div>
<br />
<div className="d-flex align-items-center">
  <FaEnvelope className="icon mr-2" />
  <p style={{ margin: '0', marginLeft: '5px', color: 'blue' }}>contact@bbbootstrap.com</p>
</div>
<br />
<div className="d-flex align-items-center">
  <FaMobile className="icon mr-2" />
  <p style={{ margin: '0', marginLeft: '5px', color: 'blue' }}>+1 989 989 9898</p>
</div>
<div className="d-flex align-items-center mt-4 justify-content-center">
  <FaFacebook className="icon mx-2" size={50} style={{ color: 'red' }} />
  <FaTwitter className="icon mx-2" size={50} style={{ color: 'red' }} />
  <FaInstagram className="icon mx-2" size={50} style={{ color: 'red' }} />
</div>

          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="mb-4">
            <hr style={{ border: '1px solid white' }} />
          </div>
          <Form name="contactForm" id="contactForm" onSubmit={handleSubmit}>
            <h3>Contact us</h3>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="name" placeholder="Name" className="form-control" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" name="email" placeholder="Email" className="form-control" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="tel" name="phone" placeholder="Phone" className="form-control" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Message"
                className="form-control"
                style={{ height: '120px' }}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-lg w-100">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Contact;
