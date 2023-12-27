import { Alert, Col, Container, Row } from "react-bootstrap";


import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './About.css';


export function About(){
    return (
        <Container className="mt-4" >
            
          
            <Row>
        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Vishal.jpeg" />
      <Card.Body>
        <Card.Title>Vishal Jaiswar</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
        <Col xs={6} md={4}>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./230940320016_Aniruddha Bansod_KH.jpg" />
      <Card.Body>
        <Card.Title>Aniruddha Bansod</Card.Title>
        <Card.Text>
          I am from cdac kharghar.I am having strength adaptability,time Management and Perseverance
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>
        <Col xs={6} md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Onkar.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>
      </Row>
            
        </Container>
    );
}