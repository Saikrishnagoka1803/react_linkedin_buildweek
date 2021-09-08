

import './App.css';
import Education from './components/Education';
import 'bootstrap/dist/css/bootstrap.min.css'
import Interests from './components/Interests';
import Dashboard from './components/Dashboard';
import Profiles from "./components/Profiles"; 

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Education/>
      <Interests/>
      <Profiles heading="People also viewed"/>
      <Profiles heading="People you may know"/>
     </div>  

   );
 }

export default App;
