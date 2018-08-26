import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '@/components/UI/Header';

export default () => (
  <Container fluid={true}>
    <Row noGutters>
      <Col>
        <Header />
      </Col>
    </Row>
    <Row>
      <Col>
        asd
        {/* { this.props.children } */}
      </Col>
    </Row>
  </Container>  
);
