// Components


import {TbLock, TbMail, TbUser} from "react-icons/tb";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="login">
            <div className="wrapper">
                <span className="bg_animate"></span>
                <div className="wrapper_form_box wrapper_login">
                    <p className="wrapper_form_box_title">Sign Up</p>
                    <form action="#">
                        <div className="wrapper_input_box">
                            <input type="text" required/>
                            <label>Username</label>
                            <i><TbUser/></i>
                        </div>
                        <div className="wrapper_input_box">
                            <input type="text" required/>
                            <label>Email</label>
                            <i><TbMail/></i>
                        </div>
                        <div className="wrapper_input_box">
                            <input type="password" required/>
                            <label>Password</label>
                            <i><TbLock/></i>
                        </div>
                        <button className="wrapper_form_box_btn" type="submit">Login</button>
                        <div className="logrek_link">
                            <p>Do you have an account? <Link to="/login" className="register_link">Sign In</Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="wrapper_info-text wrapper_login">
                    <p className="wrapper_form_box_title">Welcome Back!</p>
                    <p className="wrapper_info-text_txt">Lorem ipsum dolor sit amet .</p>
                </div>
            </div>
        </div>
    )
}

export default Register;