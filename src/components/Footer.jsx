// React
import { useEffect, useState } from "react";
// Api
import { footerApi } from "../data/footerApi";
// React Icons
import { FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {

  const [footerResponse, setFooterResponse] = useState(null);

  useEffect(() => {
      const getFooter = async () => {
          const response = await footerApi.getFooter()
          setFooterResponse(response);
      }
  
      getFooter();
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="footer_box">
          <div className="footer_box_left">
            <p className='footer_box_left_title'>Get in touch with us:</p>
            <a href="tel:+998976611688" className='footer_box_left_tel'>+998 97 661 16 88</a>
            <div className="footer_box_left_icons">
              <div className="footer_box_left_icon">
                <a href='https://www.instagram.com/'>
                  <i className='foot_icon'><FaInstagram /></i>
                </a>
              </div>
              <div className="footer_box_left_icon">
                <a href='https://web.telegram.org/'>
                  <i className='foot_icon'><FaTelegram /></i>
                </a>
              </div>
              <div className="footer_box_left_icon">
                <a href='https://www.facebook.com/'>
                  <i className='foot_icon'><FaFacebook /></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer_box_right">
            <div className="footer_box_right_column">
              <p className='footer_box_right_column_title'>Categories</p>
              {
                footerResponse && footerResponse.categories.map(item => (
                  <Link to={'/'} key={item.id}>
                    {item.name}
                  </Link>
                ))
              }
            </div>
            <div className="footer_box_right_column">
              <p className='footer_box_right_column_title'>Categories</p>
              {
                footerResponse && footerResponse.pages.map(item => (
                  <Link to={'/'} key={item.id}>
                    {item.name}
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer