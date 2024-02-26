"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
// React - bootstrap
import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";
// React Component
import Search from "../search/Search";
// React İcons

import { CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";
import { useState } from "react";
import UserModal from "../Modals/UserModal";

export default function Navbars() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div ref={modalRef} className="border-bottom p-0">
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
                    <Link className="nav-link" href="/register">
                      Sign Up
                    </Link>
                  </Nav>
                  <Nav>
                    {/* Search Component */}
                    <Search />
                    <div className="m-lg-auto mx-0 mt-1 position-relative">
                      <CiHeart className="fs-3 ms-0 ms-lg-2 cursorpointer" />
                      <Link href="/wishlist" className="p-0 m-0 text-dark">
                        <CiShoppingCart className="fs-3 ms-2  cursorpointer" />
                      </Link>

                      <CiUser
                        onClick={() => setShowModal(!showModal)}
                        className={` fs-3 ms-2 cursorpointer  ${
                          showModal &&
                          "p-1 bg-danger rounded-circle text-white fw-bolder"
                        }`}
                      />
                      <UserModal showModal={showModal} />
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
