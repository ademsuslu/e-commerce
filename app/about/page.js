import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Vissions from '../components/Vissions/Vissions'
import { team } from '../../data/Data'
import Link from 'next/link'

export default function Page() {
  return (
    <Container className="my-3">
      <Row>
        <Col className="">
          <span>Home / About</span>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-md-6 p-3 my-auto">
          <div>
            <h3>Our Story</h3>
            <span>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </span>
            <p className="mt-2">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </Col>

        <Col className="col-12 col-md-6  p-3">
          <div>
            <img src="/shop.jpeg" className="img-fluid rounded" alt="" />
          </div>
        </Col>
      </Row>
      <Row className="my-4">
        <Col className="col-12 col-md-3">
          <div className="d-flex flex-column rounded border p-2  justify-content-center align-items-center">
            <div className="text-center" style={{ width: '35px' }}>
              <img src="/home.jpeg" className="img-fluid" alt="" />
            </div>
            <h4 className="my-2">10.5k </h4>
            <p>Sallers active our site</p>
          </div>
        </Col>
        <Col className="col-12 col-md-3">
          <div className="d-flex flex-column rounded border p-2  bg-danger text-white  justify-content-center align-items-center">
            <div className="text-center" style={{ width: '35px' }}>
              <img src="/dolar.jpeg" className="img-fluid" alt="" />
            </div>
            <h4 className="my-2">33k </h4>
            <p>Mopnthly Produduct Sale</p>
          </div>
        </Col>
        <Col className="col-12 col-md-3 ">
          <div className="d-flex flex-column rounded border p-2  justify-content-center align-items-center">
            <div className="text-center" style={{ width: '35px' }}>
              <img src="/canta.jpeg" className="img-fluid" alt="" />
            </div>
            <h4 className="my-2">45.5k </h4>
            <p>Customer active in our site</p>
          </div>
        </Col>
        <Col className="col-12 col-md-3">
          <div className="d-flex flex-column rounded border p-2  justify-content-center align-items-center">
            <div className="text-center" style={{ width: '35px' }}>
              <img src="/kese.jpeg" className="img-fluid" alt="" />
            </div>
            <h4 className="my-2">25k </h4>
            <p>Anual gross sale in our site</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Vissions />
      </Row>
      <Row className="gap-2 my-5 justify-content-center align-items-center">
        {team.map((item, index) => {
          return (
            <Col key={index} className="col-12 col-md-3">
              <div className="text-center">
                <div
                  className=" my-4 mx-auto"
                  style={{ width: '150px', height: '160px' }}
                >
                  <img className="img-fluid" src={item.img} alt={item.name} />
                </div>
                <div className="mt-5">
                  <h5 className="fw-bold my-2">{item.name}</h5>
                  <p>{item.gorev}</p>
                </div>
                <div>
                  {item.icons?.map((item, index) => {
                    return (
                      <Link
                        href="/"
                        key={index}
                        className="d-inline-block fs-3 text-dark mx-1"
                      >
                        {item}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
