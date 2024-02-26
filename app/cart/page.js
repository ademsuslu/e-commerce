import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BtnDanger from "../components/Buttons/BtnDanger";

export default function Page() {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <span className="text-muted">Home / </span>
          <span className="">Cart</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="table-responsive-sm">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="d-flex">
                    <div style={{ width: "40px" }}>
                      <img src="/Tv.jpeg" alt="" className="img-fluid" />
                    </div>
                    <span className="ms-1">LCD Monitor</span>
                  </td>
                  <td>$650</td>
                  <td>
                    <input
                      placeholder="1"
                      style={{ width: "50px" }}
                      type="number"
                      name="adet"
                      id=""
                    />
                  </td>
                  <td>$650</td>
                </tr>
                <tr>
                  <td className="d-flex">
                    <div style={{ width: "40px" }}>
                      <img src="/Tv.jpeg" alt="" className="img-fluid" />
                    </div>
                    <span className="ms-1">LCD Monitor</span>
                  </td>
                  <td>$650</td>
                  <td>
                    <input
                      placeholder="1"
                      style={{ width: "50px" }}
                      type="number"
                      name="adet"
                      id=""
                    />
                  </td>
                  <td>$650</td>
                </tr>
                <tr>
                  <td className="d-flex">
                    <div style={{ width: "40px" }}>
                      <img src="/Tv.jpeg" alt="" className="img-fluid" />
                    </div>
                    <span className="ms-1">LCD Monitor</span>
                  </td>
                  <td>$650</td>
                  <td>
                    <input
                      placeholder="1"
                      style={{ width: "50px" }}
                      type="number"
                      name="adet"
                      id=""
                    />
                  </td>
                  <td>$650</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Row className="justfy-content-between align-items-center my-3">
        <Col className="d-flex align-items-center">
          <Button className="btn btn-secondary bg-transparent text-dark">
            Return To Shop
          </Button>
        </Col>
        <Col className="col text-start text-sm-end">
          <Button className="btn btn-secondary bg-transparent text-dark">
            Update Cart
          </Button>
        </Col>
      </Row>

      <Row className="my-5 row-gap-3 row-gap-lg-0 ">
        <Col className="col-12 col-lg-6 ">
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
        <Col className="col-12 col-lg-6">
          <div className="border border-dark rounded p-3">
            <h3>Cart Total</h3>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
              <div>Subtotal:</div>
              <div>$1750s</div>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
              <div>Total:</div>
              <div>$1750s</div>
            </div>
            <div className="text-start text-md-center">
              <BtnDanger text="Procees to checkout" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
