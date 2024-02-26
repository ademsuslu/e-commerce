import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeading from "../CategoryHeading/CategoryHeading";

export default function FeaturedProducts() {
  return (
    <Container className="mb-2">
      <Row>
        <Col>
          <CategoryHeading head="Featured" subHead="New Arrival" />
        </Col>
      </Row>
      <Row
        style={{ backgroundColor: " p-3" }}
        className="mt-3 justify-content-between gap-3"
      >
        <Col style={{ backgroundColor: "#000" }} className="position-relative">
          <div>
            <img className="img-fluid" src="/playstation.png" alt="" />
          </div>
          <div className="position-absolute text-white bottom-0 p-2 start-0 d-flex flex-column justify-content-between align-items-start w-100">
            <h5>PlayStation 5</h5>
            <span className="my-2">
              Black and White version of the PS5 coming out on sale.
            </span>
            <button className="btn btn-transparent text-white">Shop Now</button>
          </div>
        </Col>
        <Col className=" d-none d-lg-block m-0">
          <Col
            style={{ backgroundColor: "#000" }}
            className="position-relative p-0 m-0"
          >
            <div>
              <img className="img-fluid" src="/hat.png" alt="" />
            </div>
            <div className="position-absolute text-white bottom-0 p-2 start-0 d-flex flex-column justify-content-between align-items-start w-100">
              <h5>Women’s Collections</h5>
              <span className="my-2">
                Featured woman collections that give you another vibe.
              </span>
              <button className="btn btn-transparent text-white">
                Shop Now
              </button>
            </div>
          </Col>
          <Row className="justify-content-between mt-2 m-0">
            <Col
              md={6}
              style={{ backgroundColor: "#000" }}
              className="position-relative"
            >
              <div>
                <img className="img-fluid" src="/echo.png" alt="" />
              </div>
              <div className="position-absolute text-white bottom-0 p-2 start-0 d-flex flex-column justify-content-between align-items-start w-100">
                <h5>Speakers</h5>
                <span className="my-2">Amazon wireless speakers</span>
                <button className="btn btn-transparent text-white">
                  Shop Now
                </button>
              </div>
            </Col>
            <Col
              md={6}
              style={{ backgroundColor: "#000" }}
              className="position-relative m-0"
            >
              <div>
                <img className="img-fluid" src="/parfum.png" alt="" />
              </div>
              <div className="position-absolute text-white bottom-0 p-2 start-0 d-flex flex-column justify-content-between align-items-start w-100">
                <h5>Perfume</h5>
                <span className="my-2">GUCCI INTENSE OUD EDP</span>
                <button className="btn btn-transparent text-white">
                  Shop Now
                </button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
