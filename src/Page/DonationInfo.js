import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const DonateInfo = () => {
 

  const bankDetailsStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
  };

  const lineSeparatorStyle = {
    width: '100%',
    borderBottom: '1px dashed black', // Change the line style here
    margin: '20px 0'
  };

  const cardSeparatorStyle = {
    borderRight: '1px solid #fff',
    height: '100%',
  };

  return (
    <div id="donate">
      <h2 style={{ fontSize: '2.5em', color: 'navy', textAlign: 'center', marginBottom: '1.5em', fontFamily: 'Courier, monospace', fontWeight: 'bold' }}>
        Donate 
      </h2>
    
      <Container fluid className="py-5 bg-light" style={bankDetailsStyle}>
        <Row className="mt-4">
          <Col md={12}>
            <Card className="bank-card bg-transparent border-0">
              <Card.Body>
                <h4 className="text-black" style={{ fontWeight: 'bold' }}>Bank Details</h4>
                <p className="text-black">Account Name: Nepal Earthquake Relief Fund</p>
                <p className="text-black">Account Number: 123456789</p>
                <p className="text-black">Bank Name: Your Bank</p>
                <p className="text-black">Branch: Your Branch</p>
              </Card.Body>
            </Card>
            <div style={lineSeparatorStyle}></div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4} className="text-center" style={cardSeparatorStyle}>
            <Card className="bank-card bg-transparent border-0">
              <Card.Body>
                <h4 className="text-black" style={{ fontWeight: 'bold' }}>Khalti</h4>
                <p className="text-black">Scan QR code or use the following ID to donate through Khalti.</p>
                <p className="text-black">ID: khaltiId123</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card className="bank-card bg-transparent border-0">
              <Card.Body>
                <h4 className="text-black" style={{ fontWeight: 'bold' }}>Esewa</h4>
                <p className="text-black">Scan QR code or use the following ID to donate through Esewa.</p>
                <p className="text-black">ID: esewaId456</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DonateInfo;
