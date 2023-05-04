import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dia from '../../img/dia.avif';
import hermoso from '../../img/hermoso.avif';
import primer from '../../img/primer.avif';
import textura from '../../img/textura.avif';

function Carrusel1() {
  return (
    <Container style={{backgroundImage:`url(${textura})`, padding:'50px',backgroundSize: 'cover'}}>
      <Row >
        <Col xs={12} md={6}>
          <Carousel >
            <Carousel.Item>
              <img className="d-block w-100" src={dia} alt="First slide" style={{ maxWidth: "100%", maxHeight: "300px" }} />
              <Carousel.Caption>
                
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hermoso} alt="Second slide" style={{ maxWidth: "100%", maxHeight: "300px" }} />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={primer} alt="Third slide" style={{ maxWidth: "100%", maxHeight: "300px" }} />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} md={6}>
          <h1 style={{fontSize:'100px'}} >WHAT WE OFFER</h1>
          
        </Col>
      </Row>
      
    </Container>
    
  );
}

export default Carrusel1;
