
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Messaging from './components/Messaging';
import Profile from './components/Profile';
import TopNavbar from './components/TopNavbar';


function App() {
  return (
   <>
     <TopNavbar />
     <Profile />
     <About />
     <Messaging />
     <Footer />
    </>
  );
}

export default App;
