import React from "react";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import BtnDanger from "../components/Buttons/BtnDanger";

export default function Page() {
  return (
    <Container className="my-5">
      <Row className="my-3">
        <Col>
          <h3>Billing Details</h3>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-md-6 ">
          <Form>
            <div className="mb-3">
              <Form.Label htmlFor="Firstname">First Name</Form.Label>
              <div className="border rounded">
                <Form.Control type="text" id="Firstname" />
              </div>
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="Company">Company Name</Form.Label>
              <div className="border rounded">
                <Form.Control type="text" id="Company" />
              </div>
            </div>

            <div className="mb-3">
              <Form.Label htmlFor="Street">Street Address</Form.Label>
              <div className="border rounded">
                <Form.Control type="text" id="Street" />
              </div>
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="Apartment">
                Apartment, floor, etc. (optional)
              </Form.Label>
              <div className="border rounded">
                <Form.Control type="text" id="Apartment" />
              </div>
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="Town">Town/City*</Form.Label>
              <div className="border rounded">
                <Form.Control type="text" id="Town" />
              </div>
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="Phone">Phone Number</Form.Label>
              <div className="border rounded">
                <Form.Control type="number" id="Phone" />
              </div>
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <div className="border rounded">
                <Form.Control type="email" id="email" />
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <Form.Check aria-label="option 1" id="save" />
              <Form.Label htmlFor="save" className="my-auto ms-1">
                Save this information for faster check-out next time
              </Form.Label>
            </div>
          </Form>
        </Col>
        <Col className="text-star text-lg-center col-12 col-md-6">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <div style={{ width: "60px" }}>
                <img src="/Tv.jpeg" className="img-fluid" alt="" />
              </div>
              <span className="ms-2">LCD Monitor</span>
            </div>
            <span>$150</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <div style={{ width: "60px" }}>
                <img src="/Tv.jpeg" className="img-fluid" alt="" />
              </div>
              <span className="ms-2">LCD Monitor</span>
            </div>
            <span>$150</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
            <div className="d-flex align-items-center">
              <span className="ms-2">Subtotal:</span>
            </div>
            <span>$1750</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
            <div className="d-flex align-items-center">
              <span className="ms-2">Shipping:</span>
            </div>
            <span>Free</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
            <div className="d-flex align-items-center">
              <span className="ms-2">Total::</span>
            </div>
            <span>$1750</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3 pb-2">
            <div className="d-flex align-items-center">
              <Form>
                <div className="mb-3 d-flex">
                  <Form.Check aria-label="option" id="credit" />
                  <Form.Label htmlFor="credit" className="my-auto ms-2">
                    Bank
                  </Form.Label>
                </div>
              </Form>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div style={{ width: "30px" }}>
                <img src="/kash.jpeg" alt="" className="img-fluid" />
              </div>
              <div style={{ width: "30px" }}>
                <img src="/visa.jpeg" alt="" className="img-fluid" />
              </div>
              <div style={{ width: "30px" }}>
                <img src="/mastercard.jpeg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3 pb-2">
            <div className="d-flex align-items-center">
              <Form>
                <div className="mb-3 d-flex">
                  <Form.Check aria-label="option" id="cash" />
                  <Form.Label htmlFor="cash" className="my-auto ms-2">
                    Cash on delivery
                  </Form.Label>
                </div>
              </Form>
            </div>
          </div>

          <Row className="my-5 row-gap-3 row-gap-lg-0 ">
            <Col className=" ">
              <div className="d-flex justify-content-start align-items-center gap-2">
                <div className="border rounded">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Coupon Code"
                  />
                </div>
                <BtnDanger text="Apply Coupon" />
              </div>
            </Col>
          </Row>

          <div className="d-flex align-items-center mb-3 pb-2">
            <BtnDanger text="Place Order" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
