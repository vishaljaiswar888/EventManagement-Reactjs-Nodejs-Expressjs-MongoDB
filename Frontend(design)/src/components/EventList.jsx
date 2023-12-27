import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import{useNavigate} from "react-router-dom";
import {
  fetchEvents,
  updateEvent,
  saveEvent,
  deleteEvent,
  deleteAll,
} from "../services/eventservice"; // Assuming you have a deleteEvent function

export function EventList() {
  const navigate=useNavigate();
  const [events, setEvents] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  //const [selectedEvent, setSelectedEvent] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);
  const [SelectedeventId, setSelectedEventId] = useState("");
  const [SelectedartistName, setSelectedartistName] = useState("");
  const [description, setdescription] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [showNoEventsMessage, setShowNoEventsMessage] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({
    eventName: '',
    artistName: '',
    eventLocation:'',
    description:'',
    eventTime:'',
    eventDate:''
    
    
  });

  async function fetchEventList() {
    try {
      const data = await fetchEvents();
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEventList();
  }, []);

  const handleEdit = (event) => {
    if (event) {
      setSelectedEvent(event);
      setShowEditModal(true);
    }
  };

  const openModelDialog = () => {
    setShowDialog(true);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const openDeleteAllDialog = () => {
    setShowDeleteAllDialog(true);
  };

  const closeModelDialog = () => {
   
    setShowDeleteDialog(false);
    setShowDeleteAllDialog(false);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedEvent(null);
  };

  const handleSaveEdit = async () => {
    try {
      if (selectedEvent) {
        const updatedEvent = await updateEvent(selectedEvent.eventId, selectedEvent);
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.eventId === updatedEvent.eventId ? updatedEvent : event
          )
        );
        console.log("Saved edited details:", updatedEvent);
        handleCloseEditModal();
      } else {
        console.error("Selected event is null or undefined");
      }
    } catch (error) {
      console.error("Error saving edited details:", error);
    }
  };
  

  
  const handleDelete = async () => {
    try {
      await deleteEvent(SelectedartistName);
      fetchEventList();
      closeModelDialog();
    } catch (error) {
      console.error("error in deleting event");
    }
  };



  const handleDeleteAll = async () => {
    try {
      await deleteAll();
     closeModelDialog();
      fetchEventList();
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Container>
     <h1 style={{
  fontSize: '36px',  // Set the font size
  fontWeight: 'bold',  // Make the text bold
  textAlign: 'center',  // Center the text
  color:"white", textDecoration: 'underline',  fontFamily: 'Courier New (monospace)',  // Set the text color to a primary color (adjust as needed)
}}>List of the Events</h1>
      {events && events.length !== 0 ? (
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>RandonId</th>
              <th>Event Name</th>
              <th>Crew Head</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {events.map((event, index) => (
  <tr key={event.eventId} className="mb-4">
    <td>{index + 1}</td>
    <td>{event.eventName}</td>
    <td>{event.artistName}</td>
    <td>{event.eventDate}</td>
    <td>{event.eventTime}</td>
    <td>{event.eventLocation}</td>
    <td>{event.description}</td>
    <td>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() =>{navigate(`/edit/${event.artistName}`)}}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      setSelectedartistName(event.artistName);
                     openDeleteDialog();
                     
                      
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="text-center mt-4">No events found...!</p>
      )}
      <Container>
        <div className="justify-content-end mt-4">
          {
            <Button
              variant="danger"
              onClick={() => {
                events && events.length !== 0
                  ? openDeleteAllDialog()
                  : setShowNoEventsMessage(true);
              }}
            >
              Delete All
            </Button>
          }

          {showNoEventsMessage && (
            <p className="text-center mt-4">Nothing for deletion</p>
          )}
        </div>
      </Container>


      {/* //Modal for delete one row// */}
      <Modal show={showDeleteDialog} onHide={closeModelDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you really want to delete?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleDelete();
            }}
          >
            Yes
          </Button>
          <Button variant="primary" onClick={closeModelDialog}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
     
      {/* //Modal for delete all */}
      <Modal show={showDeleteAllDialog} onHide={closeModelDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you really want to delete All Events?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleDeleteAll();
            }}
          >
            Yes
          </Button>
          <Button variant="primary" onClick={closeModelDialog}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
