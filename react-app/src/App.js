
import './App.css';
import Education from './components/Education';
import 'bootstrap/dist/css/bootstrap.min.css'
import Interests from './components/Interests';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Education/>
      <Interests/>
      
    </div>
  );
}

export default App;
