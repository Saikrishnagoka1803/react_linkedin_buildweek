
import './App.css';

import Footer from './components/Footer';
import Messaging from './components/Messaging';

import ProfilePage from './components/ProfilePage';

import TopNavbar from './components/TopNavbar';


function App() {
  return (
   <>
     <TopNavbar />
     <ProfilePage />
     <Messaging />
     <Footer />
    </>
  );
}

export default App;
