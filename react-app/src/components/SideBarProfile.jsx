import { Component } from "react";


class SideBarProfile extends Component{

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
             <h1>Hallo</h1>
        )
    }
}
 export default SideBarProfile
