// useState
import {useState} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
// img
import img from "../images/img2.png"
import {Link} from "react-router-dom";
import {FaHeart, FaStar} from "react-icons/fa";
import {IoIosCart} from "react-icons/io";

const CategoryPage = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);

    const handlePriceChange = (priceRange) => {
        setMinPrice(priceRange[0]);
        setMaxPrice(priceRange[1]);
        // Perform any additional filtering or API calls based on the price range
    };
    return (
        <div className="categorypage">
            <div className="container">
                <div className="categorypage_box">
                    <div className="categorypage_fillters">
                        <div className="fillter_priceslider">
                            <p className="price_range">Price Range</p>
                            <p className="fillter_priceslider_currentrange">Current Range: ${minPrice} - ${maxPrice}</p>
                            <Slider
                                range
                                min={0}
                                max={1000}
                                defaultValue={[minPrice, maxPrice]}
                                onChange={handlePriceChange}
                            />
                            {/* Render your shop items and apply price filtering as needed */}
                        </div>
                    </div>
                    <div className="categorypage_products">
                        {
                            data.map(item => (
                                <div className="smartphones_box_slide" key={item.id}>
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
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage;