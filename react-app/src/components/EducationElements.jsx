import { Image, Modal,Button, Form } from "react-bootstrap"
import './Education.css'
import {MdModeEdit} from 'react-icons/md'
import { useState, useEffect } from 'react'

const EducationElements = ({eachedu}) => {

    
    const [show, setShow] = useState(false);
    const [put, setput] = useState({
        company : eachedu.company,
        role : eachedu.role,
        description : eachedu.description,
        startDate : '',
        endDate : '',
        area : eachedu.area
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const handleput = async(e) => {
    e.preventDefault()
    console.log(put)
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/6135e3407be6c10015f9dba5/experiences/'+eachedu._id,{
        method: 'PUT',
        body: JSON.stringify(put), 
        headers: {
          'Content-Type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU"
        }
        })
        if(response.ok){
          alert("Edited successfully")
        }
        
    } catch (error) {
        console.log(error)
    }
}

const handledelete = async() =>{
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/6135e3407be6c10015f9dba5/experiences/'+eachedu._id,{
        method: 'DELETE',
        
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU"
        }
        })
        if(response.ok){
          alert("Deleted successfully")
        }
    } catch (error) {
        console.log(error)
    }

}


    return(
        <>
        <div className='d-flex justify-content-between mt-3 mb-3'>
        <div className='d-flex justify-content-between'>
            <div className='mr-4'>
                <Image 
                src="https://images.unsplash.com/photo-1630865769398-670d8de09d72?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" roundedCircle 
                className='sizeimage'/>
            </div>
            <div className='mt-3'>
                <div>
                    <h5 className='text-left'>{eachedu.company}</h5>
                </div>
                <div>
                    <h6>{eachedu.role},{eachedu.area},{eachedu.startDate}</h6>
                </div>
            </div>

        </div>
        <div className='mt-3 edit'>
            <span onClick={handleShow}><MdModeEdit/></span>
        </div>
     </div>

     <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
     <Modal.Header closeButton>
          <Modal.Title>Edit Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={handleput}>
                <Form.Group className="mb-3" >
                    <Form.Label>School/Company</Form.Label>
                    <Form.Control onChange={(e) =>{setput({...put, company: e.target.value})}}
                    value={put.company}
                    type="text" placeholder="Eg: Boston University" required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Role/Degree</Form.Label>
                    <Form.Control onChange={(e) =>{setput({...put, role: e.target.value})}}
                    value={put.role}
                    type="text" placeholder="Eg: Boston University" required/>
                </Form.Group>

               <div className='d-flex justify-content-start'>
               <Form.Group className="mb-3" >
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control onChange={(e) =>{setput({...put, startDate: e.target.value})}}
                    value={put.startDate}
                    type="datetime-local" placeholder="Eg: Boston University" required/>
                </Form.Group>
                <Form.Group className="mb-3 ml-5" >
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control onChange={(e) =>{setput({...put, endDate: e.target.value})}}
                    value={put.endDate}
                    type="datetime-local" placeholder="Eg: Boston University" />
                </Form.Group>
               </div>
                
                
                <Form.Group className="mb-3" >
                  <Form.Label>Description/ Field of Study</Form.Label>
                  <Form.Control onChange={(e) =>{setput({...put, description: e.target.value})}}
                  value={put.description}
                  as="textarea" rows={2} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Area</Form.Label>
                    <Form.Control onChange={(e) =>{setput({...put, area: e.target.value})}}
                    value={put.area}
                    type="text" placeholder="Eg: Boston University" required/>
                </Form.Group>
                <Button variant="success" type="submit">
                    Save
                </Button>
                <Button variant="danger" onClick={handledelete}>
                        Delete
                        </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <div className='d-flex justify-content-start'>
            <Button className='mr-5' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
            </div>
        </Modal.Footer>
      </Modal>

     </>
    )
}
export default EducationElements