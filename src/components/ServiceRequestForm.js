// ServiceRequestForm.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ServiceRequestForm = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    email: '',
    phoneNumber: '',  // New phone number field
    serviceType: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending data to the backend
      const response = await axios.post('http://127.0.0.1:8000/services/submit/', {
        name: formData.fullName,
        email: formData.email,
        phone_number: formData.phoneNumber,  // Include the phone number in request
        service_type: formData.serviceType,
        message: formData.message,
      });

      if (response.data.status === 'success') {
        setFormStatus(response.data.message);
        setIsSubmitted(true);  // Set to true once submitted
      }
    } catch (error) {
      setFormStatus('There was an error submitting the form.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Request A Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isSubmitted ? (
          <div className="success-message">
            <h3>Success!</h3>
            <p>{formStatus}</p>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLocation">
              <Form.Label>Location (Optional)</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            {/* Add phone number field here */}
            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formServiceType">
              <Form.Label>Service Type (Optional)</Form.Label>
              <Form.Control
                type="text"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                placeholder="Enter the service type"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Detail your request"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ServiceRequestForm;
