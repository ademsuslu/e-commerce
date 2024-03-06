'use client'
import { LeftNavdata } from '../data/Data'
import { Col, Container, Row } from 'react-bootstrap'
import HeroCarousel from './components/carousels/HeroCarousel'
import TodayProducts from './components/TodayProducts/TodayProducts'
import BrowseCategory from './components/BrowseCategory/BrowseCategory'
import BestCellProducts from './components/BestCellProducts/BestCellProducts'
import Experience from './components/Experience/Experience'
import OurProducts from './components/OurProducts/OurProducts'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import Vissions from './components/Vissions/Vissions'
import ImageUpload from './components/ImageUpload/ImageUpload'
const Home = () => {
  return (
    <div>
      <Container className="mt-4 app-container">
        <Row className="p-0 ">
          <Col md={3} className="d-none d-md-flex  ">
            <ul className="list-unstyled d-flex    flex-column">
              {LeftNavdata.map((item, index) => {
                return (
                  <li
                    style={{ width: '200px' }}
                    key={index}
                    className="py-2 d-flex justify-content-between cursorpointer"
                  >
                    {item.name}
                    <span className="">{item.icon && item.icon}</span>
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col md={9} className="text-danger">
            <HeroCarousel />
          </Col>
        </Row>
        <Row className="mt-5">
          <TodayProducts />
        </Row>
        <Row className="mt-5">
          <BrowseCategory />
        </Row>
        <Row className="mt-5">
          <BestCellProducts />
        </Row>
        <Row className="mt-5">
          <Experience />
        </Row>
        <Row className="mt-5">
          <OurProducts />
        </Row>
        <Row className="mt-5">
          <FeaturedProducts />
        </Row>
        <Row className="mt-5">
          <Vissions />
        </Row>
      </Container>
    </div>
  )
}
export default Home
