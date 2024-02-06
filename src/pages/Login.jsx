// React router dom
import {Link} from "react-router-dom";
// Icons
import { TbPhone,} from "react-icons/tb";
import {useState} from "react";

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (e) => {
        const inputPhoneNumber = e.target.value;
        // Remove any non-digit characters
        const formattedPhoneNumber = inputPhoneNumber.replace(/\D/g, '');
        // Format the phone number as (+XXX) XXX-XX-XX
        let formatted = '';
        if (formattedPhoneNumber.length > 0) {
            formatted = `+(998)`;
        }
        if (formattedPhoneNumber.length >= 4) {
            formatted += ` ${formattedPhoneNumber.slice(3, 6)}`;
        }
        if (formattedPhoneNumber.length >= 7) {
            formatted += `-${formattedPhoneNumber.slice(6, 10)}`;
        }
        setPhoneNumber(formatted);
    };

    return (
        <div className="login">
            <div className="wrapper">
                <span className="bg_animate"></span>
                <div className="wrapper_form_box wrapper_login">
                    <p className="wrapper_form_box_title">Login</p>
                    <form action="#">
                        <div className="wrapper_input_box">
                            <input required
                                   type="text"
                                   id="phoneNumber"
                                   name="phoneNumber"
                                   value={phoneNumber}
                                   onChange={handleInputChange}
                                   maxLength="15" // Limit the input to the formatted length (14 characters)
                            />
                            <label>Phone number</label>
                            <i><TbPhone/></i>
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