'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { RiMenuLine } from 'react-icons/ri'
import AdminNav from '../AdminNav/AdminNav'
const AdminNavbar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="">
      <div className="mx-auto w-100">
        <RiMenuLine
          onClick={handleShow}
          className="text-light  d-block d-lg-none fs-2"
        />
      </div>
      <Offcanvas
        className="navbars bg-secondary"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <div className="mx-auto my-3">
            <Link
              onClick={() => handleClose()}
              className=" text-light   text-decoration-none fw-bold"
              href="/"
            >
              Coinshelter
            </Link>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AdminNav />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default AdminNavbar
