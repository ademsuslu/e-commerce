import { Col, Container, Row } from 'react-bootstrap'

export default function Vissions() {
  return (
    <Container className="my-5">
      <Row className="gap-2 justify-content-center align-items-center">
        <Col md={8} lg={3}>
          <div className="text-center">
            <div>
              <img className="img-fluid" src="/service.png" alt="" />
            </div>
            <h5 className="fw-bold my-2">FREE AND FAST DELIVERY</h5>
            <p>Delivery for all orders over $140</p>
          </div>
        </Col>
        <Col md={8} lg={3}>
          <div className="text-center">
            <div>
              <img className="img-fluid" src="/phone-service.png" alt="" />
            </div>
            <h5 className="fw-bold my-2">24/7 CUSTOMER SERVICE</h5>
            <p>Friendly 24/7 customer support</p>
          </div>
        </Col>
        <Col md={8} lg={3}>
          <div className="text-center">
            <div>
              <img className="img-fluid" src="/securty-service.png" alt="" />
            </div>
            <h5 className="fw-bold my-2">MONEY GUARANTEE</h5>
            <p>We reurn money within 30 days</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
