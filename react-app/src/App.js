



import './App.css';
import Education from './components/Education';
import 'bootstrap/dist/css/bootstrap.min.css'
import Interests from './components/Interests';
import Dashboard from './components/Dashboard';
import Profiles from "./components/Profiles"; 
import SecondComponent from './components/ProfilePage/SecondComponent';
import Footer from './components/Footer';

import ProfilePage from './components/ProfilePage';
import TopNavbar from './components/TopNavbar';
import Messaging from './components/Messaging';




import Profiles from "./components/Profiles"; 
import SecondComponent from './components/ProfilePage/SecondComponent';
import HomeTop from './components/Profilepart1/HomeTop';

function App() {
  return (
<>
    <div className="App">

      
      <TopNavbar />
      <ProfilePage />
      <HomeTop />
      <SecondComponent/>
      <Footer />
       

     </div>  
     <span className="message">
     <Messaging  />
   </span>
</>
   );

    
      
  

 }


export default App;
