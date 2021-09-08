import React from 'react'
import { Container, Row} from 'react-bootstrap'
import { AiFillQuestionCircle } from "react-icons/ai";

export default function SidebarOptional() {
    return (
        <div id='sidebaroptionalmenu' className='mb-3 mt-5 shadow'>
            <Container >
                <Row>
                 
                    <div><h2>Edit Public Profile & URL</h2></div>
                    <div><AiFillQuestionCircle/></div>
               
                </Row>
                <Row>
                   
                    <div><h2>Add profile in another language</h2></div>
                    <div><AiFillQuestionCircle/></div>
                  
                </Row>
            </Container>

        </div>
    )
}