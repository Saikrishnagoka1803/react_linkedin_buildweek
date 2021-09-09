import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SideBarRecent from './SideBarRecent';
import HomeTop from './Profilepart1/HomeTop';
import SecondComponent from './ProfilePage/SecondComponent';
import SideBarProfile from './SideBarProfile';

export default function HomePage() {
    return (
        <>
        <Container id='profilepage' className='mt-5' >
            <Row>
                <Col md={3}>
                    <SideBarProfile />
                    <SideBarRecent />
                </Col>
                <Col md={6}>
                   <HomeTop />
                   <SecondComponent />
                </Col>
            </Row>
        </Container>
       
          </>
    )
}