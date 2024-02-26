import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import BtnDanger from "../components/Buttons/BtnDanger";

export default function Page() {
  return (
    <Container className="my-5">
      <Row className="mb-3">
        <Col>
          <span>Home / </span>
          <span>Contact</span>
        </Col>
      </Row>
      <Row className="">
        <Col className="col-12 shadow-sm col-md-5">
          <div className="d-flex flex-column justify-content-start align-items-start gap-3">
            <div>
              <FiPhone className="bg-danger rounded-circle p-2 fs-1 text-white" />
              <span className="ms-1">Call To Us</span>
            </div>
            <div className="pb-3 border-bottom row-gap-3">
              <span>We are available 24/7, 7 days a week.</span>
              <br />
              <span>Phone: +8801611112222</span>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-start align-items-start gap-3 mt-3">
            <div>
              <MdOutlineMessage className="bg-danger rounded-circle p-2 fs-1 text-white" />
              <span className="ms-1">Write To US</span>
            </div>
            <div className="pb-3  ">
              <span className="">
                Fill out our form , we will contact you within 24 hours. <br />
              </span>
              <span className="">Emails: customer@exclusive.com</span>
              <br />
              <span className="">Emails: support@exclusive.com</span>
            </div>
          </div>
        </Col>
        <Col className="col-12 shadow-sm col-md-7 mt-3 mt-md-0">
          <Form>
            <Row>
              <Col className="col-12 col-md-4 mt-3 mt-md-0">
                <div className="border rounded">
                  <Form.Control placeholder="Your Name" type="text" />
                </div>
              </Col>
              <Col className="col-12 col-md-4 mt-3 mt-md-0">
                <div className="border rounded">
                  <Form.Control placeholder="Your Email" type="email" />
                </div>
              </Col>
              <Col className="col-12 col-md-4 mt-3 mt-md-0">
                <div className="border rounded">
                  <Form.Control placeholder="Your phone" type="number" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  className="p-2 border rounded mt-2"
                  controlId="floatingTextarea2"
                  label="Comments"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="text-start text-md-end">
                <BtnDanger text="Send Massage" />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
