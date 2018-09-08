import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '@/components/UI/Header';

export default (props) => (
  <Container>
    <Row noGutters>
      <Col>
        <Header />
      </Col>
    </Row>
    <Row>
      <Col>
      {props.children}
      </Col>
    </Row>
  </Container>  
);
