import {Container, Row, Col} from 'react-bootstrap'

const Dashboard = () => {
    return(
        <div className='Edu-aligning mt-5 mb-5'>
            <Container >
                <Row>
                <Col xs={12} sm={4} md={6} lg={8}  className='shadow' style={{backgroundColor:'silver'}}>
                    <h5 className='text-left mt-3 pl-2'>Your Dashboard</h5>
                    <h6 className='text-left text-muted fontstyle pl-2'>Private to You</h6>
                    <Row className='mt-4 px-4'>
                        <Col md={12} className='shadow ' style={{backgroundColor:'white',borderRadius:'8px'}}> 
                            <div className='d-flex justify-content-between'>
                                <div>
                                <h4>45</h4>
                                <h6>who viewed Your profile</h6>
                                </div>
                                <div>
                                <h4>45</h4>
                                <h6>who viewed Your profile</h6>
                                </div>
                                <div>
                                <h4>45</h4>
                                <h6>who viewed Your profile</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4 px-4 mb-3' >
                        <Col md={12} className='shadow ' style={{backgroundColor:'white',borderRadius:'12px'}}>
                            <div className='d-flex justify-content-start  mt-2'>
                                <span>!!</span>
                                <div className='ml-3'>
                                    <h6 className='text-left mb-0'>creater mode: off</h6>
                                    <p className='mt-0 dashtextsize'>some random lorem ipsum text here...</p>
                                </div>
                                <hr />
                            </div>
                            <div className='d-flex justify-content-start  mt-2'>
                                <span>@</span>
                                <div className='ml-3'>
                                    <h6 className='text-left mb-0'>creater mode: off</h6>
                                    <p className='mt-0 dashtextsize'>some random lorem ipsum text here...</p>
                                </div>
                                <hr />
                            </div>
                            <div className='d-flex justify-content-start  mt-2'>
                                <span>#</span>
                                <div className='ml-3'>
                                    <h6 className='text-left mb-0'>creater mode: off</h6>
                                    <p className='mt-0 dashtextsize'>some random lorem ipsum text here...</p>
                                </div>
                                <hr />
                            </div>
                            <div className='d-flex justify-content-start  mt-2'>
                                <span>$</span>
                                <div className='ml-3'>
                                    <h6 className='text-left mb-0'>creater mode: off</h6>
                                    <p className='mt-0 dashtextsize'>some random lorem ipsum text here...</p>
                                </div>
                                <hr />
                            </div>
                           
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Dashboard