'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { usePathname } from 'next/navigation'
export default function Footer() {
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith('/dashboard')
  return (
    <Container
      className={`py-4 ${isAdminPage ? 'd-none' : 'd-block'} `}
      style={{ backgroundColor: '#000', color: 'white' }}
    >
      <Row className="justify-content-center">
        <Col className=" col-12 text-center  text-md-start col-md-3 mb-2">
          <ul className="list-unstyled">
            <h3>Exclusive</h3>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
          </ul>
        </Col>
        <Col className=" col-12 text-center  text-md-start col-md-3 mb-2">
          <ul className="list-unstyled">
            <h3>Account</h3>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </Col>
        <Col className=" col-12 text-center  text-md-start col-md-3 mb-2">
          <ul className="list-unstyled">
            <h3>Quick Link</h3>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </Col>
      </Row>
      <Row className="my-2 mx-auto">
        <div className="text-center">
          &#169; Copyright Rimel 2024. All right reserved
        </div>
      </Row>
    </Container>
  )
}
