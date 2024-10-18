// ServiceRequestForm.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ServiceRequestForm = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',    // This corresponds to "name" in Django
    location: '',    // This will not be sent to Django as it's not in the backend view yet
    email: '',
    serviceType: '', // corresponds to "service_type"
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

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
        service_type: formData.serviceType, 
        message: formData.message,
      });

      setFormStatus(response.data.message);
      setFormData({ fullName: '', location: '', email: '', serviceType: '', message: '' });
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
          {formStatus && <p className="form-status">{formStatus}</p>}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ServiceRequestForm;
