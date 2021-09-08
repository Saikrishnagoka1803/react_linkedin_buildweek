import {GrLike} from 'react-icons/gr'
import {FaRegCommentDots} from 'react-icons/fa'
import {FaShare} from 'react-icons/fa'
import {RiSendPlaneFill} from 'react-icons/ri'
import { Row} from 'react-bootstrap'
const Icons = () => {
    return(
        <Row className='mt-2'>
     
        <div className='mr-4 mt-2 d-flex backg' style={{borderBottom: '1px solid gray', borderRadius:'8px'}}>    <GrLike/>          <h6 className='ml-2 text-muted'>Like</h6>     </div>
        <div className='mr-4 mt-2 d-flex backg' style={{borderBottom: '1px solid gray', borderRadius:'8px'}}>    <FaRegCommentDots/><h6 className='ml-2 text-muted'>Comment</h6>  </div>
        <div className='mr-4 mt-2 d-flex backg' style={{borderBottom: '1px solid gray', borderRadius:'8px'}}>    <FaShare/>         <h6 className='ml-2 text-muted'>Share</h6>    </div>
        <div className='mr-4 mt-2 d-flex backg' style={{borderBottom: '1px solid gray', borderRadius:'8px'}}>    <RiSendPlaneFill/> <h6 className='ml-2 text-muted'>Send</h6>     </div>
        
         </Row>
    )
}
export default Icons