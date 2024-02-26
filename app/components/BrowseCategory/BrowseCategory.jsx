import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CategoryHeading from "../CategoryHeading/CategoryHeading";
import { BrowseData } from "@/data/Data";
import Hr from "../Hr/Hr";

export default function BrowseCategory() {
  const [active, setActive] = useState();
  return (
    <Container className="mb-3">
      <Row>
        <Col>
          <CategoryHeading head="Categories" subHead="Browse By Category" />
        </Col>
      </Row>
      <Row>
        {BrowseData ? (
          BrowseData.map((item, index) => {
            const { text, icon } = item;
            return (
              <Col lg={2} md={3} sm={4} key={index} className="mb-3 mb-lg-0">
                <Card
                  className={index === active && "bg-danger text-white "}
                  onClick={() => setActive(index)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center ">
                    <div className="fs-1">{icon}</div>
                    <div
                      className="fs-6 fw-bold"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {text}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <CardPlaceholder />
        )}
      </Row>
      <Hr />
    </Container>
  );
}
