import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import maiz from '../../img/maiz.avif'


function Buscamos() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const tituloStyle = {
    fontSize: "3rem",
    textAlign: "left",
  };

  const textoStyle = {
    opacity: animate ? 1 : 0,
    transition: "opacity 2s ease-in-out",
    animation: animate ? "zoom-out 2s forwards" : "",
    animationDelay: animate ? "1s" : "",
  };

  return (
    <div style={{backgroundImage:`url(${maiz})`,backgroundSize:'cover'}} >
    <Container style={{marginTop:'100px', }}>
      <Row >
        <Col
          md={6}
          style={{
            backgroundColor: "rgb(214, 137, 16 ",
            textAlign: "center",
            marginTop: "100px",
            color: "whitesmoke",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              fontSize: "60px",
              marginTop: "150px",
            }}
          >
            Investment Criteria
          </h1>
        </Col>
        <Col md={6} style={{ backgroundColor: "#fff", textAlign: "center" }}>
          <p
            style={{
              fontSize: "1.5rem",
              marginTop: "100px",
              ...textoStyle,
            }}
          >
            <strong>
              We invest up to $500K in series seed and series A round.
            </strong>
            <br />
            <br />
            ● Management: we invest in teams and people who are committed to
            better world conditions ● Disruptive business model: focused on
            solving social problems for Latin America ● Based or serve/operate
            in the region ● Industries: healthcare and climate change ●
            scalable and able to operate on a large scale or have a large
            addressable market ● For profit businesses ● Mixed gender Leadership
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Buscamos;
