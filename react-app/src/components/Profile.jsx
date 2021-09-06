import { Component } from "react";
import { Container,Row ,Col ,Card} from "react-bootstrap";
import "../style.css";
import { MdPhotoCamera} from 'react-icons/md';
import {MdEdit} from 'react-icons/md';


class Profile extends Component{
    state= {
        profile: null
    }
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
                            <MdEdit className='edit'/>
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
                                    <p className='mx-3'><bold>Share that you're hiring</bold>and attract qualified candidates</p>
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
            </div>
            
        )
    }
}
export default Profile