
import './App.css';
import Education from './components/Education';
import 'bootstrap/dist/css/bootstrap.min.css'
import Interests from './components/Interests';
import Dashboard from './components/Dashboard';
<<<<<<< Updated upstream
=======
import Profiles from "./components/Profiles"; 
import SecondComponent from './components/ProfilePage/SecondComponent';
import HomeTop from './components/Profilepart1/HomeTop';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Education/>
      <Interests/>
<<<<<<< Updated upstream
      
    </div>
  );
}
=======
      <Profiles heading="People also viewed"/>
      <Profiles heading="People you may know"/> */}
      <HomeTop />
      <SecondComponent/>
      {/* <SecondComponent/>
      <SecondComponent/>
      <SecondComponent/> */}
     </div>  

   );
 }
>>>>>>> Stashed changes

export default App;
