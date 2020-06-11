import React, { useState } from 'react';
import '../styles/absweb.css'
 //import '../styles/abswebsecond.css'
import Signup from './SignUp'
import Signin from './Signin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Table, Button, ButtonToolbar } from 'react-bootstrap'
const Dashboard = () => {
    const [signup, setSignup] = useState(false)
    const closePopupHandlerSignup = () => {
        setSignup(false);
    }
    const [signin, setSignin] = useState(false)
    const closePopupHandlerSignin = () => {
        setSignin(false);
    }
    return (
       
        <div className="parentcontainer">
            <div className="firstheader">
                <div className="searchcontainer">
                    <input placeholder="Search here" className="searchbox" type="text" /><FontAwesomeIcon className="searchicon" icon={faSearch} />
                </div>
                <button onClick={() => setSignin(true)}className="loginbutton">Login</button>
                <button onClick={() => setSignup(true)} className="signupbutton">Sign Up</button>
            </div>
            {/* <div className="secondheader">Header</div>
            <div className="container">
                <div className="leftarea">Leftarea</div>
                <div className="maincontainer">Maincontainer</div>
                <div className="rightarea">Rightarea</div>
            </div>
            <div className="footer">Footer</div> */}
            <Signup isOpen={signup} closePopup={closePopupHandlerSignup} />
            <Signin isOpen={signin} closePopup={closePopupHandlerSignin} />
        </div>
        
    )
}
export default Dashboard;