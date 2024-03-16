import Link from 'next/link'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavbarData } from '../../../data/Data'

const AdminNav = () => {
  return (
    <div>
      <Nav className="d-flex flex-column">
        {NavbarData?.map((item, index) => (
          <Link
            className={`d-flex mb-3 align-items-center    text-light fw-bolder gap-2 nav-link text-white`}
            href={item.url}
            key={index}
            style={{ whiteSpace: 'nowrap' }}
          >
            <div className="fs-3 d-none d-lg-block">{item.icon}</div>
            <p className="my-auto">{item.name}</p>
          </Link>
        ))}
      </Nav>
    </div>
  )
}

export default AdminNav
