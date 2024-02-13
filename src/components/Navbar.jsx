import {useEffect, useState} from 'react'
// React Router Dom
import { Link} from 'react-router-dom'
// Import icons
import {FaPhone} from "react-icons/fa6";
import {FcAbout} from "react-icons/fc";
import {GiBugleCall} from "react-icons/gi";
import {
    IoMdSearch,
    IoMdCart,
    IoMdHeart,
    IoIosArrowDown,
    IoMdClose,
    IoMdMenu,
    IoIosPerson,
    IoMdLaptop,
    IoIosPhonePortrait,
    IoMdHeadset,
    IoIosLogIn
} from 'react-icons/io'
import {LuListOrdered, LuLanguages} from "react-icons/lu";
import {PiTelevisionSimpleDuotone, PiTruckDuotone} from "react-icons/pi";
import {headerApi} from "../data/headerApi.js";


const Navbar = () => {

    const [headerResponse, setHeaderResponse] = useState(null);

    useEffect(() => {
        const getHeader = async () => {
            const response = await headerApi.getHeader()
            setHeaderResponse(response);
        }

        getHeader();
    }, []);



    const [bar, setBar] = useState(false);
    const handleBar = () => setBar(!bar);

    const [search, setSearch] = useState(false);
    const handleSearch = () => setSearch(!search);

    const [isOpenPay, setIsOpenPay] = useState(false);
    const handlePay = () => {
        setIsOpenPay(!isOpenPay);
    };

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        // onSelect(option.value);
        setIsOpenPay(false);
    };

    const options = [
        {value: '1', label: 'USD'},
        {value: '2', label: 'RUB'},
        {value: '3', label: 'SUM'},
    ];

    const [isOpenLang, setIsOpenLang] = useState(false);
    const handleLang = () => {
        setIsOpenLang(!isOpenLang);
    };

    const [selectedLang, setSelectedLang] = useState(null);
    const handleLangClick = (lang) => {
        setSelectedLang(lang);
        // onSelect(lang.value);
        setIsOpenLang(false);
    };

    const languages = [
        {value: '1', label: 'English'},
        {value: '2', label: 'Русский'},
        {value: '3', label: 'Uzbek'},
    ];

    const [sideLang, setSideLang] = useState(false);
    const handleSideLang = () => setSideLang(!sideLang);

    return (
        <>
            <div className={!search ? 'search' : 'search_none'}>
                <div className="none" onClick={handleSearch}></div>
                <div className="search_flex container">
                    <Link to={'/'} className='nav_logo'>MARKT</Link>
                    <div className="search_input">
                        <i className='nav_i'>
                            <IoMdSearch/>
                        </i>
                        <input type="text" placeholder='Search'/>
                    </div>
                    <div className="serach_close" onClick={handleSearch}>
                        <i>
                            <IoMdClose/>
                        </i>
                    </div>
                </div>
            </div>
            <nav>
                <div className="container">
                    <div className="nav_box">
                        <div className={bar ? "sidebar sidebar_open" : "sidebar"}>
                            <div className='sidebar_left'>
                                <div className="sidebar_nav">
                                    <div className="sidebar_nav_left">
                                        <i className='nav_i'><IoIosPerson/></i>
                                        <Link to={'/'} className='sideber_nav_log'>Log out</Link>
                                        <div className='sidebar_line'></div>
                                        <Link to={'/'} className='sideber_nav_log'>Register</Link>
                                    </div>
                                    <div className="sidebar_nav_right" onClick={handleBar}>
                                        <i className="nav_i"><IoMdClose/></i>
                                    </div>
                                </div>
                                <div className="sidebar_header">
                                    <div className="sidebar_header_links" onClick={handleBar}>
                                        <Link to={'/new'} className='sidebar_nav_link'><i
                                            className='nav_i'><IoMdLaptop/></i>Laptops</Link>
                                        <Link to={'/'} className='sidebar_nav_link'><i
                                            className='nav_i'><IoIosPhonePortrait/></i>Phones</Link>
                                        <Link to={'/'} className='sidebar_nav_link'><i
                                            className='nav_i'><PiTelevisionSimpleDuotone/></i>Televisions</Link>
                                        <Link to={'/accessories'} className='sidebar_nav_link'><i
                                            className='nav_i'><IoMdHeadset/></i>Accessories</Link>
                                    </div>
                                    <p className='sidebar_header_text'>Information</p>
                                    <div className="sidebar_header_links">
                                        <Link to={'/'} className='sidebar_nav_link' onClick={handleBar}><i
                                            className='nav_i'><FcAbout/></i>About</Link>
                                        <Link to={'/'} className='sidebar_nav_link' onClick={handleBar}><i
                                            className='nav_i'><GiBugleCall/></i>Discounts</Link>
                                        <Link to={'/'} className='sidebar_nav_link' onClick={handleBar}><i
                                            className='nav_i'><PiTruckDuotone/></i>Delivery</Link>
                                        <Link to={'/'} className='sidebar_nav_link' onClick={handleBar}><i
                                            className='nav_i'><FaPhone/></i>Contact</Link>
                                        <Link to={'/'} className='sidebar_nav_link' onClick={handleBar}><i
                                            className='nav_i'><LuListOrdered/></i>Orders</Link>
                                        <div className="side_lang">
                                            <div className="sidebar_nav_link" onClick={handleSideLang}>
                                                <i className='nav_i'><LuLanguages/></i>Lang
                                            </div>
                                            <div
                                                className={sideLang ? "side_lang_box side_lang_box_open" : "side_lang_box"}>
                                                {
                                                    languages.map(lang => (
                                                        <div className="side_lang_box_lang"
                                                             key={lang.value}>{lang.label}</div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <Link to={'/'} className="sidebar_nav_link" onClick={handleBar}><i
                                            className='nav_i'><IoIosLogIn/></i>Log in</Link>
                                    </div>
                                    <a href="tel:+998976611688" className="sidebar_nav_phone">+99897 661 16 88</a>
                                </div>
                            </div>
                            <div className='sidebar_close_div' onClick={handleBar}></div>
                        </div>
                        <div className='nav_bar'>
                            <i className='nav_i' onClick={handleBar}><IoMdMenu/></i>
                            <Link to={'/'} className='nav_logo'>MARKT</Link>
                        </div>
                        <div className="nav_links">
                            {
                                headerResponse && headerResponse.data.map(item => (
                                    <div key={item.id}>
                                        <Link to={`/${item.link_type}/${item.link_slug}`} className='nav_link'>{item.name}</Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="nav_end">
                            <div className="nav_search_btn" onClick={handleSearch}>
                                <i className='nav_i'>
                                    <IoMdSearch/>
                                </i>
                                <p className='nav_search'>search</p>
                            </div>
                            <Link to={'/cart'} className="nav_icon">
                                <i className='nav_i'>
                                    <IoMdCart/>
                                </i>
                                <b>0</b>
                            </Link>
                            <Link to={'/wishlist'} className="nav_icon">
                                <i className='nav_i'>
                                    <IoMdHeart/>
                                </i>
                                <b>0</b>
                            </Link>
                            <div className="nav_usd_box">
                                <div className="nav_usd_box_text"
                                     onClick={handlePay}>{selectedOption ? selectedOption.label : 'USD'}</div>
                                <div className={!isOpenPay ? 'nav_little_box' : 'nav_little_box_open'}>
                                    {
                                        options.map((option) => (
                                            <div
                                                className={`nav_usd_box_text ${selectedOption === option ? 'selected' : ''}`}
                                                key={option.value}
                                                onClick={() => handleOptionClick(option)}>
                                                {option.label}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="nav_usd_box nav_lang_box">
                                <div className="nav_usd_box_text" onClick={handleLang}>
                                    {selectedLang ? selectedLang.label : 'English'}
                                    <i className='nav_i'>
                                        <IoIosArrowDown/>
                                    </i>
                                </div>
                                <div className={!isOpenLang ? 'nav_little_box' : 'nav_little_box_open'}>
                                    {
                                        languages.map((lang) => (
                                            <div
                                                className={`nav_usd_box_text ${selectedLang === lang ? 'selected' : ''}`}
                                                key={lang.value}
                                                onClick={() => handleLangClick(lang)}>
                                                {lang.label}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <Link to={'/login'} className="nav_sign_in">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="navbar_free"></div>
        </>
    )
}

export default Navbar;