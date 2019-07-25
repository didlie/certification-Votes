import React, { Component } from 'react';
import CertifiedList from './CertifiedList';
import CertifiedQuery from './CertifiedQuery';

import { Container, Row, Col } from 'react-bootstrap';

export default class App extends Component {
  state = { certs: [] };

  updateCerts = newCerts => {
    this.setState({ certs: newCerts });
  };

  render() {
    return (
      <Container>
        <h1 className="text-center">Tezos Developer Certification</h1>
        <Row style={{ marginTop: '3rem' }}>
          <Col xs={1} />
          <Col xs={10}>
            <h1>Certified Addresses</h1>
            <CertifiedList update={this.updateCerts} />
            <h1 style={{ marginTop: '5rem', marginBottom: '2rem' }}>
              Certification Query
            </h1>
            <CertifiedQuery certs={this.state.certs} />
          </Col>
          <Col xs={1} />
        </Row>
      </Container>
    );
  }
}
