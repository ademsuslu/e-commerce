import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CategoryHeading from "../CategoryHeading/CategoryHeading";
import CardPlaceholder from "../PlaceHolders/CardPlaceholder";
import BtnDanger from "../Buttons/BtnDanger";
import { BestCellData } from "@/data/Data";
import { CiHeart, CiShoppingCart, CiStar } from "react-icons/ci";

export default function BestCellProducts() {
  return (
    <Container className="mb-2">
      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          <CategoryHeading head="This Month" subHead="Best Selling Products" />
        </Col>
      </Row>
      <Row>
        {BestCellData ? (
          BestCellData.map((item, index) => {
            const { img, title, newPrice, oldPrice, comment } = item;
            return (
              <Col lg={3} md={6} sm={12} key={index} className="mb-3 mb-lg-0">
                <Card className="position-relative">
                  <div className="position-absolute top-0 end-0 d-flex justify-content-between align-items-start w-100">
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
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <CardPlaceholder />
        )}
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <BtnDanger text="View All" />
        </Col>
      </Row>
    </Container>
  );
}
