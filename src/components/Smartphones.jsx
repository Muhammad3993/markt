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

// Link
import { Link } from 'react-router-dom';



const Smartphones = ({data, name}) => {
    return (
        <div className='smartphones'>
            <div className="container ">
                <div className="smartphones_box">
                    <div className="categories_box_top">
                        <p className='title'>{name}</p>
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
                                                <img src={item.image} alt={item.image} />
                                            </div>
                                            <div className="smartphones_box_slide_text">
                                                <Link to={'/detail'} className='smartphones_box_slide_text_title'>{item.title}</Link>
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
                                            <button className={item.liked === false ? "sm_item_heart" : "sm_item_heart liked"}>
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