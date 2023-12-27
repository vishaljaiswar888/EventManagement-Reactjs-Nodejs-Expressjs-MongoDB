import { Alert, Col, Container, Row } from "react-bootstrap";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import TimePicker from "react-datetime-picker";
import './EventManagement.css';


import React, { useEffect, useState } from "react";
import { saveEvent, deleteEvent } from "../services/eventservice";
import { useParams } from "react-router-dom";



// ... (imports)

export function Editevent() {
    const params=useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [SelectedartistName, setSelectedartistName] = useState("");
  const [formData, setFormData] = useState({
    eventName: "",
    artistName: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleUpdate = async () => {
    try {
      
      await deleteEvent(params.artistName);
      await handleFormSubmit();
     
      
      await fetchEventList();
      
    } catch (error) {
      console.error("error in deleting event");
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await saveEvent(formData);
      setFormData({
        eventName: "",
        artistName: "",
        eventDate: "",
        eventTime: "",
        eventLocation: "",
        description: "",
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 1500);
      console.log(result.message);
    } catch (error) {
      console.log(error);
    }
  };
useEffect(()=>{

    console.log(params.artistName);
},[]);
  const handleClearForm = () => {
    setFormData({
      eventName: "",
      artistName: "",
      eventDate: "",
      eventTime: "",
      eventLocation: "",
      description: "",
    });
  };
  const [locationOptions, setLocationOptions] = useState([
    "Nagpur",
    "Pune",
    "Mumbai",
    "Hyderabad",
  ]);
  const [timeOptions, setTimeOptions] = useState([
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
  ]);

  return (
    <div className="d-flex align-items-center justify-content-center vh-80">
      <Container
        className="mt-3 p-3 rounded"
        style={{
          width: "700px",
          height: "700px",
          background: "linear-gradient(to right, #92c5c2, #034d52)",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "15px",
          marginBottom:"100px"
        }}
      >
           <Alert variant="primary" >
                <h4>Edit Event</h4>
            </Alert>

       
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-1" controlId="eventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event name"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="artistName">
            <Form.Label>Crew Head</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter crew head name"
              name="artistName"
              value={formData.artistName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Date</Form.Label>
            <DatePicker
              selected={formData.eventDate}
              onChange={(date) => setFormData({ ...formData, eventDate: date })}
              dateFormat="MM/dd/yyyy"
              customInput={<Form.Control style={{ borderRadius: "0.375rem" }} />}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Time</Form.Label>
            <Form.Select
              value={formData.eventTime}
              onChange={(e) => setFormData({ ...formData, eventTime: e.target.value })}
              style={{ borderRadius: "0.375rem" }}
            >
              <option value="">Select time</option>
              {timeOptions.map((timeOption, index) => (
                <option key={index} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Location</Form.Label>
            <Form.Select
              value={formData.eventLocation}
              onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
              style={{ borderRadius: "0.375rem" }}
            >
              <option value="">Select location</option>
              {locationOptions.map((locationOption, index) => (
                <option key={index} value={locationOption}>
                  {locationOption}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              style={{ borderRadius: "0.375rem", marginTop: "10px" }}
              onClick={handleUpdate}
            >
              Update
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleClearForm}
              style={{ borderRadius: "0.375rem", marginTop: "10px" }}
            >
              Clear
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
