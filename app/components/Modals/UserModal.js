import React from 'react'
import { CiUser, CiLogout } from 'react-icons/ci'
import { TbBorderCorners } from 'react-icons/tb'
import { ImCancelCircle } from 'react-icons/im'
import { signOut } from 'next-auth/react'

export default function UserModal({ showModal }) {
  return (
    <div>
      <div
        style={{
          width: '300px',
          backgroundColor: 'rgb(135, 134, 136,0.8)',
          boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.5)',
        }}
        className={`${
          showModal ? 'd-block' : 'd-none'
        } position-absolute top-100 translate-small-x end-0 p-3 rounded z-3 text-white  mt-2`}
      >
        <ul className="list-unstyled">
          <li className="d-flex cursorpointer mb-3 align-items-center justify-content-start">
            {' '}
            <CiUser className="fs-3 " />
            <p className="ms-1 my-auto">Manage My Account</p>
          </li>
          <li className="d-flex cursorpointer mb-3 align-items-center justify-content-start">
            <TbBorderCorners className="fs-3 " />
            <p className="ms-1 my-auto">My Order</p>
          </li>
          <li className="d-flex cursorpointer mb-3 align-items-center justify-content-start">
            {' '}
            <ImCancelCircle className="fs-3 " />
            <p className="ms-1 my-auto">My Cancellations</p>
          </li>
          <li className="d-flex cursorpointer mb-3 align-items-center justify-content-start">
            <CiUser className="fs-3 " />
            <p className="ms-1 my-auto">My Reviews</p>
          </li>
          <li
            onClick={() => signOut()}
            className="d-flex cursorpointer mb-3 align-items-center justify-content-start"
          >
            <CiLogout className="fs-3 " />
            <p className="ms-1 my-auto"> Logout</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
