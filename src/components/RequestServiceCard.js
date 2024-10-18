// RequestServiceCard.js
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ServiceRequestForm from './ServiceRequestForm'; // Import the form component

const RequestServiceCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="request-service-card">
        <Card.Body>
          <Card.Title>Request A Service</Card.Title>
          <Card.Text>
            You can request any software, research, or consultant service by filling out the Service Request form by clicking the button below.
          </Card.Text>
          <Button variant="info" onClick={handleShow}>
            Open Service Request Form
          </Button>
        </Card.Body>
      </Card>

      {/* Service Request Form Modal */}
      <ServiceRequestForm show={showModal} handleClose={handleClose} />
    </>
  );
};

export default RequestServiceCard;
