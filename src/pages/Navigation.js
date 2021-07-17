import {Link} from 'react-router-dom';
import logo from '../pictures/logo.png';
import training from '../pictures/training.png';
import booking from '../pictures/booking.png';
import chat from '../pictures/chat.png';
import news from '../pictures/news.png';
import {changeTraining} from '../script.js';
import {changeBooking} from '../script.js';
import {changeChat} from '../script.js';
import {changeNews} from '../script.js';

const Navbar = () => {
    return ( 
        <header className="sticky-top">
            <nav className="navbar bg-dark text-white p-1 navbar-expand">
                <h1><img src={logo} style={{width: "45px"}} alt="pic"/> Hoopster</h1>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto me-2">
                        <li className="nav-item mr-3">
                            <Link to="/" id="tr" className="nav-link" onClick={changeTraining}><img src={training} style={{width: "24px"}} alt="pic" id="trp"/> Training</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to="/Booking" id="bo" className="nav-link text-white" onClick={changeBooking}><img src={booking} style={{width: "24px"}} alt="pic" id="bop"/> Booking</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to="/Chat" id="ch" className="nav-link text-white" onClick={changeChat}><img src={chat} style={{width: "24px"}} alt="pic" id="chp"/> Chat</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to="/News" id="ne" className="nav-link text-white" onClick={changeNews}><img src={news} style={{width: "24px"}} alt="pic" id="nep"/> News</Link>
                        </li>
                        <li>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <li>
                            <div align="right" id="google_translate_element"></div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;