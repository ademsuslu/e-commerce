'use client'
import { useState } from 'react'
import { Container, Row, Col, Placeholder } from 'react-bootstrap'
import CategoryHeading from '../CategoryHeading/CategoryHeading'

import { Card } from 'react-bootstrap'
import { CiHeart, CiShoppingCart, CiStar } from 'react-icons/ci'
import BtnDanger from '../Buttons/BtnDanger'
import BtnDark from '../Buttons/BtnDark'
import CardPlaceholder from '../PlaceHolders/CardPlaceholder'
import Hr from '../Hr/Hr'
import { getProducts } from '../../action'
import { useEffect } from 'react'
const TodayProducts = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      setProductData(data)
    }
    fetchData()
  }, [])
  const [ProductData, setProductData] = useState()
  const initialProducts = ProductData ? ProductData.slice(0, 4) : []
  const [showAll, setShowAll] = useState(false)
  return (
    <Container className="mb-2">
      <Row>
        <Col>
          <CategoryHeading head="Today's" subHead="Flash Sales" />
        </Col>
      </Row>
      <Row>
        {showAll
          ? ProductData?.map((item, index) => {
              const {
                image,
                name,
                newPrice,
                oldPrice,
                discount,
                comments,
                stars,
              } = item
              return (
                <Col lg={3} md={6} sm={12} key={index} className="mb-3 mb-lg-2">
                  <Card className="position-relative">
                    <div className="position-absolute top-0 start-0 d-flex justify-content-between align-items-start w-100">
                      <p className="m-2 p-2 bg-danger text-white rounded-3">
                        {discount ? `-${discount}%` : ''}
                      </p>
                      <div className="d-flex flex-column m-2">
                        <div className="p-1 cursorpointer rounded-circle bg-white mb-1">
                          <CiHeart className="fs-4 text-secondary fw-semibold" />
                        </div>
                        <div className="p-1 cursorpointer rounded-circle bg-white">
                          <CiShoppingCart className="fs-4 text-secondary fw-semibold" />
                        </div>
                      </div>
                    </div>
                    <div
                      className=""
                      style={{ width: '100%', height: '200px' }}
                    >
                      <Card.Img
                        variant="top"
                        className="w-100  h-100 object-fit-cover "
                        src={image}
                      />{' '}
                    </div>
                    <Card.Body className="text-start">
                      <Card.Title className="fs-6">{name}</Card.Title>
                      <div className="d-flex">
                        <p className="text-success fw-bolder">${newPrice}</p>
                        <p className="text-muted ms-1 fw-normal text-decoration-line-through">
                          ${oldPrice}
                        </p>
                      </div>
                      <div className="d-flex ">
                        <div className="d-flex p-0 m-0">
                          <CiStar className="fs-4 fw-bolder text-warning" />
                        </div>
                        <p className="text-right text-muted p-0">
                          ( {comments ? `${comments}` : ''})
                        </p>
                      </div>

                      <div className="d-grid  col-12">
                        <BtnDark text="Add to cart" />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          : initialProducts?.map((item, index) => {
              const {
                image,
                name,
                newPrice,
                oldPrice,
                discount,
                comments,
                stars,
              } = item
              return (
                <Col lg={3} md={6} sm={12} key={index} className="mb-3 mb-lg-2">
                  <Card className="position-relative">
                    <div className="position-absolute top-0 start-0 d-flex justify-content-between align-items-start w-100">
                      <p className="m-2 p-2 bg-danger text-white rounded-3">
                        {discount ? `-${discount}%` : ''}
                      </p>
                      <div className="d-flex flex-column m-2">
                        <div className="p-1 cursorpointer rounded-circle bg-white mb-1">
                          <CiHeart className="fs-4 text-secondary fw-semibold" />
                        </div>
                        <div className="p-1 cursorpointer rounded-circle bg-white">
                          <CiShoppingCart className="fs-4 text-secondary fw-semibold" />
                        </div>
                      </div>
                    </div>
                    <div
                      className=""
                      style={{ width: '100%', height: '200px' }}
                    >
                      <Card.Img
                        variant="top"
                        className="w-100  h-100 object-fit-cover "
                        src={image}
                      />{' '}
                    </div>
                    <Card.Body className="text-start">
                      <Card.Title className="fs-6">{name}</Card.Title>
                      <div className="d-flex">
                        <p className="text-success fw-bolder">${newPrice}</p>
                        <p className="text-muted ms-1 fw-normal text-decoration-line-through">
                          ${oldPrice}
                        </p>
                      </div>
                      <div className="d-flex ">
                        <div className="d-flex p-0 m-0">
                          <CiStar className="fs-4 fw-bolder text-warning" />
                        </div>
                        <p className="text-right text-muted p-0">
                          ( {comments ? `${comments}` : ''})
                        </p>
                      </div>

                      <div className="d-grid  col-12">
                        <BtnDark text="Add to cart" />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
        {ProductData && ProductData.length === 0 && <CardPlaceholder />}
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <BtnDanger
            setShowAll={setShowAll}
            showAll={showAll}
            text="View All Products"
          />
        </Col>
      </Row>
      <Hr />
    </Container>
  )
}
export default TodayProducts
