



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Col, Container ,Row} from 'react-bootstrap';

import ProfilePage from './components/ProfilePage';
import TopNavbar from './components/TopNavbar';
import Messaging from './components/Messaging';
import MessageTop from './components/MessageTop';
import HomePage from './components/HomePage';
import { BrowserRouter  as Router ,Route} from 'react-router-dom';
import ProfileImageUpload from './components/ProfileImageUpload';

function App() {
  return (
<>  
        <Router>
            <div className="App">
              <TopNavbar />
              <Route path='/profile' exact component= {ProfilePage} />
              <Route path='/' exact component={HomePage} />
              <Container>
                <Row>
                  <Col className='col-md-6  pr-2' >
                      <Route path="/message" exact component={MessageTop} />

                  </Col>
                </Row> 
                
              </Container>
            
            </div>  
            <span className="message">
            <Messaging  />
            </span>
          </Router>
</>
   );
 }


export default App;
