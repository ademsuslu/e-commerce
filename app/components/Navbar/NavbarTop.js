"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function NavbarTop() {
  const [lang, setlang] = useState("En");
  return (
    <div style={{ backgroundColor: "#000000" }} className="text-white mb-4  ">
      <Container md={6}>
        <Row className="justify-content-between align-items-center py-1">
          <Col md={8} className="d-block navbartop-head fw-light ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link
              className="ms-2  text-white text-decoration-underline "
              href="/"
            >
              ShopNow
            </Link>
          </Col>
          {/* text-md-end text-start  */}
          <Col
            md={4}
            className="d-flex justify-content-start justify-content-md-end p-0 m-0"
          >
            {" "}
            <Form.Select
              style={{ backgroundColor: "#000000" }}
              size="sm"
              className=" border-0 outline-none text-white cursorpointer  "
              onChange={(e) => setlang(e.target.value)}
              value={lang}
            >
              <option value={"Tr"}>Tr</option>
              <option value={"Fr"}>Fr</option>
              <option value={"Us"}>Us</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
