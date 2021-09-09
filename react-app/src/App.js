
import './App.css';
import Education from './components/Education';
import 'bootstrap/dist/css/bootstrap.min.css'
import Interests from './components/Interests';
import Dashboard from './components/Dashboard';


import Profiles from "./components/Profiles"; 
import SecondComponent from './components/ProfilePage/SecondComponent';
import HomeTop from './components/Profilepart1/HomeTop';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Education/>
      <Interests/>
      <HomeTop />
      <SecondComponent/>
      
    </div>
  );

 }


export default App;
