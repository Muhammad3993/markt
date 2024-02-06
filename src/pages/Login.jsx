// React router dom
import {Link} from "react-router-dom";
// Icons
import {TbLock, TbUser} from "react-icons/tb";

const Login = () => {
    return (
        <div className="login">
            <div className="wrapper">
                <span className="bg_animate"></span>
                <div className="wrapper_form_box wrapper_login">
                    <p className="wrapper_form_box_title">Login</p>
                    <form action="#">
                        <div className="wrapper_input_box">
                            <input type="text" required/>
                            <label>Username</label>
                            <i><TbUser/></i>
                        </div>
                        <div className="wrapper_input_box">
                            <input type="password" required/>
                            <label>Password</label>
                            <i><TbLock/></i>
                        </div>
                        <button className="wrapper_form_box_btn" type="submit">Login</button>
                        <div className="logrek_link">
                            <p>Don`t have an account? <Link to="/register" className="register_link">Sign Up</Link></p>
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

export default Login;