import React, { Component } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import './LeftSidebar.css'
import { BsBookmarkFill } from 'react-icons/bs';
import { IoIosSquare } from 'react-icons/io';
import { BsPlusCircle } from 'react-icons/bs';
import { BiChevronUpCircle } from 'react-icons/bi';

export default class NewsFeedLeft extends Component {
    render() {
        return (
            <>
            <div className="left-side-wrap shadow">
                <Container xs={12} md={6} lg={3}>
                    <Row>
                        <Col>
                            <div className="image-wrap">
                                <img className="side-image" src="https://picsum.photos/100/38" alt="profile" />
                            </div>
                            <div className="mt-4">
                                <h4>Bimal Sah</h4>
                                <p>Student at Frankfurt</p>
                            </div>
                            <div>
                                <p>Who viewed your profile <span className="text-primary">3</span></p> 
                                <p>Views of your post <span className="text-primary">96</span></p> 
                            </div>
                            <hr />
                            <div>
                                <p>Access exclusive tools and insights</p>
                                <p><IoIosSquare /> Try premium for free</p>
                            </div>
                            <hr />
                            <div>
                                <Button variant="outline-secondary" size="lg"><BsBookmarkFill /> My Items</Button>
                            </div>
                        </Col>    
                    </Row>    
                </Container>
            </div>
            
            <div className="left-side-wrap shadow mt1">
                    <Container xs={12} md={6} lg={3}>
                    <Row>
                        <Col>
                            <div>
                                    Recents
                            </div>
                            <div>
                                <ul>
                                    <li>medicine</li>
                                    <li>futurism</li>
                                    <li>innovation</li>
                                    <li>technology</li>
                                </ul>
                            </div>
                            <div className="mt3">
                                <p className="variant=primary">Groups</p>
                                <p className="justify-content-space-between variant=primary">Events <span><BsPlusCircle /></span></p> 
                            </div>
                            <div className="d-flex mt5 justify-content-space-between">
                                Followed Hashtags <span><BiChevronUpCircle/></span>
                            </div>
                            <div className="d-flex mx-auto">Discover more</div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
}

