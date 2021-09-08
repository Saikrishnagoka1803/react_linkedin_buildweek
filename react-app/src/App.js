import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Profiles from "./components/Profiles";

function App() {
  return (
    <div>
      <Profiles heading="People also viewed"/>
      <Profiles heading="People you may know"/>
    </div>
  );
}

export default App;
