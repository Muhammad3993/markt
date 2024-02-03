// icon
import { FaStar, FaHeart } from "react-icons/fa";
import {IoIosArrowRoundForward, IoIosCart} from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

// img
import img from "../images/img2.png"
import { Link } from 'react-router-dom';

// data
const data = [
    {
        id: 1,
        img: img,
        title: "IPhone 13 Pro Max",
        grade: 5,
        comment: 1,
        price: 650,
    },
    {
        id: 2,
        img: img,
        title: "IPhone 13 Pro Max",
        grade: 4,
        comment: 0,
        price: 650,
    },
    {
        id: 3,
        img: img,
        title: "IPhone 13 Pro Max",
        grade: 3,
        comment: 2,
        price: 650,
    },
    {
        id: 4,
        img: img,
        title: "IPhone 13 Pro Max",
        grade: 3,
        comment: 2,
        price: 650,
    },
    {
        id: 5,
        img: img,
        title: "IPhone 14 Pro Max",
        grade: 3,
        comment: 2,
        price: 650,
    },
    {
        id: 6,
        img: img,
        title: "IPhone 13 Pro Max",
        grade: 3,
        comment: 2,
        price: 650,
    },
    {
        id: 7,
        img: img,
        title: "IPhone 13 Pro Max",
        grade: 3,
        comment: 2,
        price: 650,
    },
    {
        id: 8,
        img: img,
        title: "IPhone 13 Pro Max",
        grade: 3,
        comment: 2,
        price: 650,
    },
    {
        id: 9,
        img: img,
        title: "IPhone 13 Pro Max",
        grade: 3,
        comment: 2,
        price: 650,
    },
]

const Smartphones = () => {
    return (
        <div className='smartphones'>
            <div className="container ">
                <div className="smartphones_box">
                    <div className="categories_box_top">
                        <p className='title'>Smartphones</p>
                        <Link to={'/'} className='cat_link'>Go to all <i className='cat_icon'><IoIosArrowRoundForward/></i></Link>
                    </div>
                    <div className="slide_box">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[FreeMode, Navigation]}
                            breakpoints={{
                                200: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                560: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                900: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1150: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            className="mySwiper sm_slider"
                        >
                            {
                                data.map(item => (
                                    <SwiperSlide key={item.id}>
                                        <div className="smartphones_box_slide" >
                                            <div className="smartphones_box_slide_img">
                                                <img src={item.img} alt={item.img} />
                                            </div>
                                            <div className="smartphones_box_slide_text">
                                                <Link to={'/'} className='smartphones_box_slide_text_title'>{item.title}</Link>
                                                <div className="smartphones_box_slide_text_grade">
                                                    <i className='sm_icon'><FaStar /></i>
                                                    <p className='smartphones_box_slide_text_star'>{item.grade} <span>( {item.comment} Comments )</span></p>
                                                </div>
                                                <div className="smartphones_box_slide_text_bottom">
                                                    <p className='sm_item_price'>{item.price} USD</p>
                                                    <button className='smartphones_box_slide_text_bottom_btn'>
                                                        <i className='sm_icon'><IoIosCart /></i>
                                                        <p>Add to</p>
                                                    </button>
                                                </div>
                                            </div>
                                            <button className="sm_item_heart">
                                                <ip><FaHeart /></ip>
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smartphones;