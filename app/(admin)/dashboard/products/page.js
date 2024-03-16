import { Col, Container, Row } from 'react-bootstrap'
import AdminCreate from '../dashboardComponents/Create/AdminCreate'
import AdminDropdown from '../dashboardComponents/AdminDropdown'
import Producttable from '../dashboardComponents/Producttable/Producttable'

export default function Page() {
  return (
    <Container fluid className="text-secondary">
      <Row className="justify-content-between">
        <Col className="col-12 col-md-6">
          <h3>Products</h3>
        </Col>
        <Col className="col-12 d-flex justify-content-start justify-content-md-end  gap-2 align-items-center col-md-6">
          <button className="btn btn-secondary btn-sm">Export</button>
          <button className="btn btn-secondary btn-sm">Import</button>
          <AdminDropdown />
          <AdminCreate />
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Producttable />
        </Col>
      </Row>
    </Container>
  )
}
