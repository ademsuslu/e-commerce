import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function CategoryHeading({ head, subHead }) {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-start align-items-center">
          <div
            className="bg-danger rounded"
            style={{ width: "15px", height: "30px" }}
          ></div>
          <span className="text-danger ms-3">{head}</span>
        </Col>
      </Row>
      <Row>
        <Col className="my-2">
          <h1>{subHead}</h1>
        </Col>
      </Row>
    </Container>
  );
}
