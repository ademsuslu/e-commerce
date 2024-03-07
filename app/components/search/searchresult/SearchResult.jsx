import Link from 'next/link'
import React from 'react'

export default function SearchResult(results) {
  return (
    <ul className="p-0">
      {results?.results?.map((item) => (
        <li className="list-unstyled" key={item._id}>
          <hr />
          <Link
            href={`/cardetay/${item._id}`}
            className="d-flex align-items-center text-decoration-none saklıdır"
          >
            <div className="me-3 d-flex my-auto  w-100 justify-content-between align-items-center">
              <span className="my-auto text-dark m-0 p-0 ">{item.name}</span>
              <div className="d-flex align-items-center ms-2">
                <p className="text-success p-0 m-0 fw-bolder">
                  ${item.newPrice}
                </p>
                <p className="text-muted p-0 m-0 ms-3 fw-normal text-decoration-line-through">
                  ${item.oldPrice}
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
