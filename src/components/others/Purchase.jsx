import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Purchase extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <h4 className="section-title-login">Purchase Page </h4>
              <p className="section-title-contact">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
                voluptatum et veniam maiores tempora consectetur nulla placeat
                accusantium doloremque sed, dolor asperiores consequatur eaque
                animi nesciunt! Quisquam sed quaerat perspiciatis.<br></br>
                <br></br>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Unde, iste! Consectetur, obcaecati maxime nesciunt cum,
                possimus accusantium expedita laboriosam consequatur similique
                pariatur, aspernatur dolor. Vitae, dolorum. Repellendus voluptas
                ad optio.<br></br>
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur dolores obcaecati a vero culpa aut beatae. Tempora,
                dolores laboriosam omnis esse debitis at delectus mollitia culpa
                eum eaque molestias earum?
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Purchase;
