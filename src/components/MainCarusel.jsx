// React Router dom
import {Link} from 'react-router-dom';
// img
// import img from "../images/img.png";
// import img1 from "../images/img1.png";
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from 'swiper/modules';


const MainCarusel = ({data}) => {
    return (
    <div className='main_carusel'>
        <div className="main_carusel_box">
            <Swiper
                rewind={true}
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3500, disableOnInteraction: false,
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                breakpoints={{
                    100: {
                        cssMode: false,
                    }, 1150: {
                        cssMode: true
                    },
                }}
                className="mySwiper main_swiper"
            >
                {
                    data.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className="container">
                                <div className="main_swipe">
                                    <div className="main_swipe_text">
                                        <p className='main_swipe_text_tag'>{}</p>
                                        <p className='main_swipe_text_desc'>{}</p>
                                        <Link to={'/'} className='main_swipe_text_btn'>Buy</Link>
                                    </div>
                                    <div className="main_swipe_img">
                                        <img src={item.image} alt="img"/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
    )
}

export default MainCarusel