import { Modal, Button, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { GiMeshBall } from 'react-icons/gi'
import { BiCaretDown } from 'react-icons/bi'
import {BsImage} from 'react-icons/bs'
import '../Education.css'

function HomeTopModel() {
    const [show, setShow] = useState(false);
    const [Postobj, setPostobj] = useState({
        text : ''
    })
    const [button, setbutton] = useState(false)
    
    const handlePost = async() => {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/posts/',{
                    method : 'POST',
                    body: JSON.stringify(Postobj),
                    headers: {
                            "content-type" : "Application/json",
                          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU"
                      }
                })
                if(response.ok){
                    alert("Your Post is Published!!")
                    setbutton(false)
                    setShow(false)
                }
                else{
                    alert('Sorry, Something went wrong')
                }
            } catch (error) {
                console.log(error)
            }
        
        }
       
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <>
            <Button onClick={handleShow}
                style={{
                    padding: '0 11rem',
                    borderColor: 'black',
                    borderRadius: '50px',
                    marginLeft: 'auto',
                    marginRight: 'auto',

                }}
                variant='transparent'
            >
                <span className='pl-0'>post</span> </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex'>
                        <img style={{ borderRadius: '52px', width: '52px' }} src='https://picsum.photos/200' height='50' alt="" />
                        <div className='ml-4'>
                            <h6>Sai Krishna Reddy Goka</h6>
                            <Button style={{}}
                                style={{
                                   width:'fit-content',
                                    borderColor: 'black',
                                    borderRadius: '50px',
                                    

                                }}
                                variant='transparent'
                            >
                                <GiMeshBall /> Anyone <BiCaretDown /></Button>
                        </div>
                    </div>
                    <Form className='mt-2' onSubmit={handlePost}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder='Whatever you want to write here?'
                                style={{ border: 'none' }} 
                                onChange = {(e) => {
                                    setPostobj({
                                        text : e.target.value
                                    })
                                    setbutton(true)
                                }}/>
                        </Form.Group>
                    <Button type='submit' variant={ button ? 'success' : 'primary'}> Post</Button>
                    </Form>



                </Modal.Body>
                <Modal.Footer style={{justifyContent:'space-between'}} className='d-flex'>
                   
                <BsImage style={{fontSize:'1.5rem',color:'skyblue'}}/>
                    <Button
                        style={{ borderRadius: '50px', padding: '5px 12px' }} variant="primary" onClick={handleClose}>
                       close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default HomeTopModel
