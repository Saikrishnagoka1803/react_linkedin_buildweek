import { Container, Col, Row } from 'react-bootstrap'
import { GoGlobe } from 'react-icons/go'
import { BsThreeDots } from 'react-icons/bs'
import '../Education.css'
import Loader from '../Loader'
import { useEffect, useState } from 'react'
import Icons from './Icons'


const SecondComponent = () => {

    const [profilepost, setprofilepost] = useState([])
    const [length, setlength] = useState(1218)
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
            setisLoading(true)
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
                    headers: {

                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU"
                    }
                })
                if (response.ok) {
                    let data = await response.json()
                    setprofilepost(data)
                    setlength(data.length)
                    setisLoading(false)
                    console.log("Hey Iam posts", data)
                }
                else {
                    console.log("Something went wrong")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchPosts()
    }, [length])

    return (


        isLoading ? <Loader /> : profilepost && profilepost.slice(length - 15, length).reverse().map(ele => <Container className='mt-3' style={{ backgroundColor: 'white' }} >

            <Row className='justify-content-center' style={{ backgroundColor: 'white' }}>
                <Col className='shadow' offset='2' style={{ borderTop: '1px solid gray', borderRadius: '8px', backgroundColor: 'white' }}>

                    <div className='d-flex justify-content-start mt-2 mb-2'>
                        <img style={{ borderRadius: '50px', width: '52px', height: '52px' }} height='60' src="https://images.unsplash.com/photo-1630754328109-013e18676561?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="..." roundedCircle />

                        <div>
                            <div className="d-flex ">

                                <h6 className='ml-3 text-left' style={{margin:'0px', fontWeight:'bold'}}>{ele.username}</h6>
                                <BsThreeDots style={{marginLeft:'13rem'}} />
                               
                            </div>
                                <h6 className='ml-3 fontsize text-left'>29585 followers</h6>
                                <h6 className='ml-3 fontsize text-left'>3d . <GoGlobe/></h6>
                            </div>

                    </div>
                </Col>

            </Row>


            <Row className='justify-content-center'>
                <Col className='text-left shadow' >
                    <h6 className='mt-2 '>{ele.text}</h6>
                </Col>
            </Row>
            <Row className='justify-content-center'>

                <Col style={{ padding: '0px' }}>

                    <img className='img-fluid' style={{ objectFit: 'cover', overflow: 'hidden' }} src="https://images.unsplash.com/photo-1628191079308-6183b016b3df?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                </Col>
            </Row>
            <Icons />
        </Container>
        )




    )


}
export default SecondComponent