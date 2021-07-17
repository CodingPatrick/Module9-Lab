import Navbar from './pages/Navigation';
import Footer from './pages/Footer';
import Training from './pages/Training';
import Booking from './pages/Booking';
import Chat from './pages/Chat';
import News from './pages/News';
import './css/style.css';
import './script.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

   return (
      <Router>
         <div className="App">
            <Navbar/>
            <div className="content">
               <Switch>
                  <Route exact path="/">
                     <Training/>
                  </Route>
                  <Route exact path="/booking">
                     <Booking/>
                  </Route>
                  <Route exact path="/chat">
                     <Chat/>
                  </Route>
                  <Route exact path="/news">
                     <News/>
                  </Route>
               </Switch>
            </div>
            <Footer/>
         </div>
      </Router>
   );
}

export default App;