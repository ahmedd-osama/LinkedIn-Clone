import React from 'react'
import Section from '../../UI/Section/Section'
import Announcement from './Announcement'
import { Col, Row } from 'react-bootstrap'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Center from './Center'

const HomePage = () => {
  return (
    <>
    <Announcement />
    <Section fluid='xxl'>
      <Row className='gap-lg-2'>
        <Col xs={6}   lg={2}  className=' order-1'>
        <LeftSide/>
        </Col>
        <Col   className='order-3 order-lg-2 mt-3 mt-lg-0'>
          <Center/>
        </Col>
        <Col xs={6} lg ={3} className=' order-2 order-lg-3'>
          <RightSide/>
        </Col>
      </Row>
    </Section>
    </>
  )
}

export default HomePage