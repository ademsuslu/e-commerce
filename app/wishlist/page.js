"use client";
import { ProductData } from "@/data/Data";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CiStar } from "react-icons/ci";
import BtnDark from "../components/Buttons/BtnDark";
import { MdOutlineDelete } from "react-icons/md";
import CategoryHeading from "../components/CategoryHeading/CategoryHeading";

export default function Page() {
  return (
    <Container className="my-3">
      <Row className="justfy-content-between align-items-center my-3">
        <Col className="d-flex align-items-center">
          <h1>Wishlist</h1>
          <h4 className="ms-2">(5)</h4>
        </Col>
        <Col className="col text-start text-sm-end">
          <Button className="btn btn-secondary">Move All To Bag</Button>
        </Col>
      </Row>
      <Row>
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
                      <div className="p-1 cursorpointer rounded-circle bg-white">
                        <MdOutlineDelete className="fs-4 text-secondary fw-semibold" />
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

      <Row className="my-5">
        <Col>
          <CategoryHeading head="Just For You" />
        </Col>
      </Row>
      <Row>
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
                      <div className="p-1 cursorpointer rounded-circle bg-white">
                        <MdOutlineDelete className="fs-4 text-secondary fw-semibold" />
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
