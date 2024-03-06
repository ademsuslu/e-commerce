'use client'

import Search from '../search/Search'
import { CiHeart, CiUser, CiShoppingCart } from 'react-icons/ci'
import UserModal from '../Modals/UserModal'
import { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import Link from 'next/link'

const SearchAndUser = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modalRef = document.querySelector('#navModal')
      if (modalRef && !modalRef.contains(event.target)) {
        setShowModal(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
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
            showModal && 'p-1 bg-danger rounded-circle text-white fw-bolder'
          }`}
        />
        <UserModal showModal={showModal} />
      </div>
    </Nav>
  )
}

export default SearchAndUser
