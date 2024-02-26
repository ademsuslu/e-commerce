"use client";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CategoryHeading from "../components/CategoryHeading/CategoryHeading";
import { ProductData } from "@/data/Data";
import { CiHeart, CiShoppingCart, CiStar } from "react-icons/ci";
import BtnDark from "../components/Buttons/BtnDark";
import CardPlaceholder from "../components/PlaceHolders/CardPlaceholder";
import Hr from "../components/Hr/Hr";
import BtnDanger from "../components/Buttons/BtnDanger";
import { FaCarSide, FaRecycle } from "react-icons/fa";

export default function Page() {
  const [value, setValue] = useState(1);
  return (
    <Container>
      <Row className="my-5">
        <Col className="col-sm-12 col-md-2 d-none d-lg-flex  gap-2  flex-column">
          <div
            style={{ width: "150px", height: "150px" }}
            className="mb-1 p-2 bg-light rounded "
          >
            <img src="/kol-one.jpeg" alt="" className="img-fluid" />
          </div>
          <div
            style={{ width: "150px", height: "150px" }}
            className="mb-1 p-2 bg-light rounded "
          >
            <img src="/kol-two.jpeg" alt="" className="img-fluid" />
          </div>
          <div
            style={{ width: "150px", height: "150px" }}
            className="mb-1 p-2 bg-light rounded "
          >
            <img src="/kol-three.jpeg" alt="" className="img-fluid" />
          </div>
        </Col>
        <Col className="col-12 col-lg-5 my-auto">
          <div
            style={{ maxWidth: "400px", maxHeight: "300px" }}
            className="mb-1 p-2 bg-light rounded "
          >
            <img src="/col-ana.jpeg" alt="" className="img-fluid" />
          </div>
        </Col>
        <Col className="col-12 col-lg-5 mx-0 ">
          <div>
            <h3>Havic HV G-92 Gamepad</h3>
            <h4 className="text-success fw-bolder">$159</h4>
            <span>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </span>
            <Hr />
            <div className="d-flex justify-content-between my-3">
              <div className="d-flex gap-2 ">
                <button
                  disabled={value === 0}
                  className="btn btn-secondary text-dark bg-transparent"
                  onClick={() => setValue((prevState) => prevState - 1)}
                >
                  -
                </button>
                <h2>{value}</h2>
                <button
                  className="btn btn-secondary text-dark bg-transparent"
                  onClick={() => setValue((prevState) => prevState + 1)}
                >
                  +
                </button>
              </div>

              <BtnDanger text="Buy Now" />
            </div>
            <Hr />

            <div className="border rounded d-flex flex-column">
              <div className="d-flex align-items-center p-3">
                <div>
                  <FaCarSide className="fs-2 text-secondary" />
                </div>
                <div className="ms-3">
                  <h4>Free Delivery</h4>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center p-3">
                <div>
                  <FaRecycle className="fs-2 text-secondary" />
                </div>
                <div className="ms-3">
                  <h4>Return Delivery</h4>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <CategoryHeading head="Related Item" />
        </Col>
      </Row>
      <Row className="my-1">
        {ProductData ? (
          ProductData.map((item, index) => {
            const { img, title, newPrice, oldPrice, discount, comment } = item;
            return (
              <Col lg={3} md={6} sm={12} key={index} className="mb-3 mb-lg-0">
                <Card className="position-relative">
                  <div className="position-absolute top-0 start-0 d-flex justify-content-between align-items-start w-100">
                    <p className="m-2 p-2 bg-danger text-white rounded-3">
                      {discount}
                    </p>
                    <div className="d-flex flex-column m-2">
                      <div className="p-1 cursorpointer rounded-circle bg-white mb-1">
                        <CiHeart className="fs-4 text-secondary fw-semibold" />
                      </div>
                      <div className="p-1 cursorpointer rounded-circle bg-white">
                        <CiShoppingCart className="fs-4 text-secondary fw-semibold" />
                      </div>
                    </div>
                  </div>
                  <div className="" style={{ width: "100%", height: "200px" }}>
                    <Card.Img
                      variant="top"
                      className="w-100  h-100 object-fit-cover "
                      src={img}
                    />{" "}
                  </div>
                  <Card.Body className="text-start">
                    <Card.Title className="fs-6">{title}</Card.Title>
                    <div className="d-flex">
                      <p className="text-success fw-bolder">{newPrice}</p>
                      <p className="text-muted ms-1 fw-normal text-decoration-line-through">
                        {oldPrice}
                      </p>
                    </div>
                    <div className="d-flex ">
                      <div className="d-flex p-0 m-0">
                        <CiStar className="fs-4 fw-bolder text-warning" />
                        <CiStar className="fs-4 fw-bolder text-warning" />
                        <CiStar className="fs-4 fw-bolder text-warning" />
                      </div>
                      <p className="text-right text-muted p-0">({comment})</p>
                    </div>

                    <div className="d-grid  col-12">
                      <BtnDark text="Add to cart" />
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
    </Container>
  );
}
