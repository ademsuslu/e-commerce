import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import BtnDanger from "../components/Buttons/BtnDanger";
import Link from "next/link";

export default function Page() {
  return (
    <Container className="my-5">
      <Row className="mb-3 d-flex justify-content-between align-items-center">
        <Col>
          <span>Home / </span>
          <span>Account</span>
        </Col>
        <Col className="text-start text-md-end">
          <span>Welcome</span>
          <span className="ms-1 text-danger fw-bolder">Jonh Doe</span>
        </Col>
      </Row>
      <Row className="">
        <Col className="col-12  col-md-4 ">
          <div className="mb-2 ">
            <h4>Manage My Account</h4>
            <ul className="list-unstyled d-flex flex-column ms-0 ms-md-4">
              <li className="mb-2">
                <Link className="text-decoration-none text-danger " href="/">
                  My Profile
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none text-secondary" href="/">
                  Address Book
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none text-secondary" href="/">
                  My Payment Options
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-2 ">
            <h4>My Orders</h4>
            <ul className="list-unstyled d-flex flex-column ms-0 ms-md-4">
              <li className="mb-2">
                <Link className="text-decoration-none text-secondary " href="/">
                  My Returns
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-decoration-none text-secondary" href="/">
                  My Cancellations
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="col-12 border rounded p-2 col-md-8 mt-3 mt-md-0">
          <Form>
            <Row>
              <Col className="col-12 col-md-6 my-3 mt-md-0">
                <div className="border rounded">
                  <Form.Control placeholder="John " type="text" />
                </div>
              </Col>
              <Col className="col-12 col-md-6 my-3 mt-md-0">
                <div className="border rounded">
                  <Form.Control placeholder="Doe" type="text" />
                </div>
              </Col>
              <Col className="col-12 col-md-6 my-3 mt-md-0">
                <div className="border rounded">
                  <Form.Control placeholder="info@gmail.com" type="email" />
                </div>
              </Col>
              <Col className="col-12 col-md-6 my-3 mt-md-0">
                <div className="border rounded">
                  <Form.Control placeholder="Address" type="text" />
                </div>
              </Col>
              <Row>
                <h4>Password Changes</h4>
                <Col className="col-12 my-3 mt-md-0">
                  <div className="border rounded">
                    <Form.Control
                      placeholder="Current password"
                      type="password"
                    />
                  </div>
                </Col>
                <Col className="col-12 my-3 mt-md-0">
                  <div className="border rounded">
                    <Form.Control placeholder="New Password" type="password" />
                  </div>
                </Col>
                <Col className="col-12 my-3 mt-md-0">
                  <div className="border rounded">
                    <Form.Control
                      placeholder="Confirm New Password"
                      type="password"
                    />
                  </div>
                </Col>
              </Row>
            </Row>

            <Row className="mt-2">
              <Col className="text-start text-md-end">
                <button className="btn btn-secondary text-dark border-none me-1 bg-transparent">
                  Cancel
                </button>
                <BtnDanger text="Save Changes" />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
