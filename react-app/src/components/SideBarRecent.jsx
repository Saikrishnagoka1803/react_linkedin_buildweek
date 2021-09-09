import { HiUserGroup } from 'react-icons/hi'
import { GoPlus } from 'react-icons/go'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const SideBarRecent = ()=>(
    <div className="border mt-4 shadow" style={{borderRadius:'8px'}}>
        <div className=' mt-3'>
        
        <ul style={{listStyle:'none'}} >
            <h6>Recent</h6>
            <li>
            <Nav.Link  style={{color:'black', marginLeft:'1px'}} href="https://www.linkedin.com/groups/8689804/"><HiUserGroup className='mr-2'/>UNI-2020-2021</Nav.Link>
            </li>
            <h6 className='mt-4 text-primary'>Groups</h6>
            <Nav.Link  style={{color:'black', marginLeft:'1px'}} href="https://www.linkedin.com/groups/8689804/"><HiUserGroup className='mr-2'/>UNI-2020-2021</Nav.Link>
            <p className='ml-4 mt-2'>See all</p>
            <div className='d-flex justify-content-between mb-2'><h6 className='text-primary'>Events</h6><GoPlus className='mr-3'/></div>
           <h6 className='text-primary'>Followed Hashtags</h6>
        </ul>
        <hr></hr>
        <Nav.Link style={{color:'black' ,textDecoration:'none'}} href='https://www.linkedin.com/mynetwork/discover-hub/'><h5 className='text-muted' style={{textAlign:'center', marginBottom:'18px'}}>Discover more</h5></Nav.Link>
        </div>
    </div>
)
export default SideBarRecent