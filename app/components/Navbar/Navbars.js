'use client'
import Link from 'next/link'
// React - bootstrap
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap'

import SearchAndUser from './SearchAndUser'
import SignIn from '../SignIn'
const Navbars = ({ session }) => {
  return (
    <div id="navModal" className="border-bottom p-0">
      <Container className="p-0">
        <Row>
          <Col>
            <Navbar collapseOnSelect expand="lg" className="bg-body-white">
              <Container>
                <Link className="navbar-brand" href="/">
                  Exclusive
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="m-auto">
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                    <Link className="nav-link" href="/contact">
                      Contact
                    </Link>
                    <Link className="nav-link" href="/about">
                      About
                    </Link>
                    {!session?.user?.email && <SignIn />}
                  </Nav>
                  <SearchAndUser />
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbars
