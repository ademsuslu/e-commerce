import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col className="text-center">
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link
            className="text-danger text-text-decoration-underline fs-1"
            href="/"
          >
            Return Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
