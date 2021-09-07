import { Component } from "react";
import { Container,Row ,Col ,Card,Modal,Form, Button} from "react-bootstrap";
import "../style.css";
import { MdPhotoCamera} from 'react-icons/md';
import {MdEdit} from 'react-icons/md';
import {FaPlus} from 'react-icons/fa'


class Profile extends Component{
    state= {
        profile: null,
        show: false,
    }
  handleEdit = async (e)=>{
       e.preventDefault()
       console.log('hallo')
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/',{
                method: 'PUT',
                body: JSON.stringify(this.state.profile),
                headers:{
                    "Content-type": "application/json",
                     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU",
                     
                }
            })
            if(response.ok){
              alert('Profile edited successfully')
            }
          
            
        } catch (error) {
           console.log(error)
        }
    }
   
     handleClose = () => this.setState({ show:false});
     handleShow = () => this.setState({ show:true})
     
    componentDidMount = async ()=>{
     try {
         const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me',{
             headers:{
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU",
             }
         })
         if(response.ok){
           let data = await response.json()
           this.setState({profile: data})
           console.log(this.state.profile)
         }
       
         
     } catch (error) {
        console.log(error)
     }
 }


    render(){
        return(
            <div className='profileBox'>
                <Container  className='mt-3'>
                    {
                        this.state.profile && (
                            <Row style={{padding:'0px'}}>
                                <Col md={6} lg={8} sm={12} className='shadow'>
                            <div className="wrapper">
                               <img className="profileImage" src={this.state.profile.image} alt='profile-pic'/>
                            </div>
                            <MdPhotoCamera className="PhotoCamera"/>
                            <MdEdit className='edit' onClick={this.handleShow}/>
                            <div className='ml-3 profile'>
                            <h2>{this.state.profile.name} {this.state.profile.surname}</h2>
                            <h5>{this.state.profile.bio}</h5>
                            <div className='d-flex'>
                            <p className="text-muted">{this.state.profile.area}</p>
                            <Card.Link className="text-primary  ml-2 font-weight-bold" href="#">Contact Info</Card.Link>
                            </div>
                            <Card.Link className="text-primary  font-weight-bold" href="#"> 52 connections</Card.Link>
                            <div className='d-flex my-2'>
                              <button className='btn btn-primary open'><span className='mx-2'>Open to</span></button>
                              <button className='add-section'><span className='mx-3'>Add section</span></button>
                              <button className='more'><span className='mx-3'>More</span></button>
                            </div>
                            
                            </div>
                            <Row>
                                <Col xm={12} sm={12} md={3} lg={6} className='p-0'>
                                <div className='wrapper-two my-4 ml-3'>
                                    <div className='my-2'>
                                       <div className='d-flex'><h6 className='mx-3' >Open to work</h6> <span className='ml-auto mr-3'><MdEdit /></span></div> 
                                        <p className='mx-3'>Frontend Developers role</p>
                                        <h6 className="text-primary mx-3" > See all details</h6>
                                    </div>
                                </div>
                                </Col>
                                <Col xm={12} sm={12} md={3} lg={6} className='pl-0'>
                                <div className='wrapper-three mt-4 ml-3'>
                                    <div className='my-2'>
                                    <p className='mx-3'>Share that you're hiring and attract qualified candidates</p>
                                    <h6 className="text-primary mx-3" > Get Started</h6>
                                    </div>
                                </div>
                                </Col>
                                </Row>

                            </Col>
                       
                                
                           
                          </Row>
                        )
                      
                    }
                 
                </Container>
            
                   {this.state.profile && ( <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title >Edit intro</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                    <Form onSubmit={this.handleEdit}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Row>
                                <Col>
                                <Form.Label>First Name *</Form.Label>
                                <Form.Control type="text" value={this.state.profile.name} onChange={(e) => {this.setState({profile: {
                                    ...this.state.profile,
                                    name: e.target.value
                                }})}}/>
                                </Col>
                                <Col>
                                <Form.Label>Last Name *</Form.Label>
                                <Form.Control type="text" value={this.state.profile.surname} onChange={(e) => {this.setState({profile: {
                                    ...this.state.profile,
                                    surname: e.target.value
                                }})}}/>
                                </Col>
                                
                                </Row>
                                
                            </Form.Group>
                            <h6 className='text-primary ml-2'>Add former name</h6>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Pronouns</Form.Label>
                                <Form.Control as="select">
                                <option>Please select</option>
                                <option>She/Her</option>
                                <option>He/Him</option>
                                <option>They/Them</option>
                                <option>Custom</option>
                                </Form.Control>
                                <p style={{fontSize:'12px'}}>Let others know how to refer to you. <span className='text-primary' style={{fontSize:'14px'}}>Learn more</span></p>
                            </Form.Group>
                    
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Headline *</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <div className='d-flex text-primary my-4'>
                                <FaPlus  />
                                <h5 className='ml-2'>Add current position</h5>
                            </div>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Education</Form.Label>
                                <Form.Control as="select" value={this.state.profile.bio} onChange={(e) => {this.setState({profile: {
                                    ...this.state.profile,
                                    bio: e.target.value
                                }})}} >
                                <option>Frankfurt University of Applied Sciences</option>
                                <option>Strive School</option>
                                
                                </Form.Control>
                                <h6 className='text-primary my-3'>Add new education</h6>
                                
                            </Form.Group>
                            <div className='d-flex'>
                            <Form.Check aria-label="option 1" />
                            <p>Show education in my intro</p>
                            </div>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Country/Region *</Form.Label>
                                <Form.Control type="text" value={this.state.profile.area} onChange={(e) => {this.setState({profile: {
                                    ...this.state.profile,
                                    area: e.target.value
                                }})}}/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Row>
                                <Col md={5} lg={4}>
                                <Form.Label>Postal code</Form.Label>
                                <Form.Control type="text" />
                                </Col>
                                <Col md={7} lg={8}>
                                <Form.Label>Locations within this area</Form.Label>
                                <Form.Control type="text" />
                                </Col>
                                
                                </Row>
                                
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Industry *</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Button variant="primary" className='float-right' type='submit'>
                            Save
                           </Button>
                            </Form>

                        </Modal.Body>
                
                    </Modal>)
    }
        </div>
    
      );
  
    }
}
export default Profile