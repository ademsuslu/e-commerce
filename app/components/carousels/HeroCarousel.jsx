'use client'
import { useState } from 'react'
import { MdArrowRightAlt } from 'react-icons/md'

const HeroCarousel = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <div>
        <div className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-flex flex-row justify-content-between">
                <div>
                  <div className="carousel-caption mb-5">
                    <h3>Up to 10% off Voucher</h3>
                    <a href="/" className="text-white shop-now">
                      Shop Now <MdArrowRightAlt className="fs-3 right-Arrow" />
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    className="d-block w-100"
                    src="/phone.jpeg"
                    alt="First slide"
                  />
                </div>
              </div>
            </div>
            <div className={`carousel-item ${index === 1 ? 'active' : ''}`}>
              <div className="d-flex flex-row justify-content-between">
                <div>
                  <div className="carousel-caption mb-5">
                    <h3>Up to 10% off Voucher</h3>
                    <a href="/" className="text-white shop-now ">
                      Shop Now <MdArrowRightAlt className="fs-3 right-Arrow" />
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    className="d-block w-100"
                    src="/CAM.jpg"
                    alt="Second slide"
                  />
                </div>
              </div>
            </div>
            <div className={`carousel-item ${index === 2 ? 'active' : ''}`}>
              <div className="d-flex flex-row justify-content-between">
                <div>
                  <div className="carousel-caption mb-5">
                    <h3>Up to 10% off Voucher</h3>
                    <a href="/" className="text-white shop-now">
                      Shop Now <MdArrowRightAlt className="fs-3 right-Arrow" />
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    className="d-block w-100"
                    src="/PC.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>
          <ul className="carousel-indicators">
            <li
              data-bs-target=".carousel"
              data-bs-slide-to="0"
              className={index === 0 ? 'active' : ''}
              onClick={() => handleSelect(0)}
            ></li>
            <li
              data-bs-target=".carousel"
              data-bs-slide-to="1"
              className={index === 1 ? 'active' : ''}
              onClick={() => handleSelect(1)}
            ></li>
            <li
              data-bs-target=".carousel"
              data-bs-slide-to="2"
              className={index === 2 ? 'active' : ''}
              onClick={() => handleSelect(2)}
            ></li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default HeroCarousel
