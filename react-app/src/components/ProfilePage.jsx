import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import About from './About'
import Profile from './Profile'
import SidebarOptional from './SidebarOptional'

export default function ProfilePage() {
    return (
        <Container id='profilepage' className='mt-5'>
            <Row>
                <Col className='col-md-8 ordder-md-1 pr-2'>
                   <Profile />
                   <About />
                    
                </Col>
                <Col className='col-md-4 ordder-md-2 pl-3'>
                    <SidebarOptional/>
                </Col>
            </Row>
        </Container>
    )
}