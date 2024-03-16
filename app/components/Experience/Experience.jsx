import { Col, Container, Row } from 'react-bootstrap'

export default function Experience() {
  return (
    <Container style={{ backgroundColor: '#000' }} className=" rounded-2 mb-5">
      <Row className="p-2">
        <Col className="my-auto text-md-start">
          <div className="d-flex flex-column justify-content-start align-items-start ">
            <h4 className="" style={{ color: '#00FF66' }}>
              Categories
            </h4>
            <h2 className="text-white my-4">Enhance Your Music Experience</h2>
            <div>
              <button className="btn" style={{ backgroundColor: '#00FF66' }}>
                Buy Now!
              </button>
            </div>
          </div>
        </Col>
        <Col className="d-none d-md-block">
          <div>
            <img
              className="img-fluid"
              src="/BuyHoparlor.png"
              style={{ objectFit: 'contain' }}
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
