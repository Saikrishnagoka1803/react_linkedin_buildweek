



import './App.css';
import Footer from './components/Footer';

import ProfilePage from './components/ProfilePage';
import TopNavbar from './components/TopNavbar';
import Messaging from './components/Messaging';


function App() {
  return (
<>
    <div className="App">
      <TopNavbar />
      <ProfilePage />
    
      <Footer />
       
     </div>  
     <span className="message">
     <Messaging  />
   </span>
</>
   );
 }


export default App;
