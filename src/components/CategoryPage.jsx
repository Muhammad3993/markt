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

const data1 = [
    {
        id: 1,
        name: 'Laptop',
    },
    {
        id: 2,
        name: 'Laptop',
    },
    {
        id: 3,
        name: 'Laptop',
    },
    {
        id: 4,
        name: 'Laptop',
    },
]
// img
import img from "../images/img2.png"
import {Link} from "react-router-dom";
import {FaHeart, FaStar, FaArrowRight, FaArrowLeft} from "react-icons/fa";
import {IoIosCart} from "react-icons/io";

const CategoryPage = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [openFilter, setOpenFilter] = useState(true);

    const handlePriceChange = (priceRange) => {
        setMinPrice(priceRange[0]);
        setMaxPrice(priceRange[1]);
        // Perform any additional filtering or API calls based on the price range
    };

    const onInputChange = (inputName, value) => {
        if (inputName === 'min') {
            setMinPrice(value);
        } else if (inputName === 'max') {
            setMaxPrice(value);
        }
    };
    return (
        <div className="categorypage">
            <div className="container">
                <div className="categorypage_box">
                    <div className={!openFilter ? "categorypage_fillters categorypage_fillters_close" : "categorypage_fillters"}>
                        <div className="categorypage_fillters_open" onClick={()=>setOpenFilter(!openFilter)}>
                            {
                                openFilter ? <FaArrowRight /> : <FaArrowLeft />
                            }
                        </div>
                        <div className="categorypage_box_cat_all">
                            <Link to={'/category'} className="categorypage_box_cat_all_title">Category All</Link>
                            <div className="categorypage_box_cats">
                                {
                                    data1.map(item => (
                                        <Link to={'/'} className="categorypage_box_cat" key={item.id}>
                                            {item.name}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div style={{margin: '20px', textAlign: 'center'}}>
                            <h1>Price: $</h1>
                            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
                                <input
                                    type="number"
                                    style={{width: '45%', textAlign: 'center', marginRight: '10px',}}
                                    value={minPrice}
                                    onChange={(e) => {
                                        onInputChange('min', e.target.valueAsNumber);
                                    }}
                                />
                                <span style={{marginLeft: '10px', marginRight: '10px'}}>-</span>
                                <input
                                    type="number"
                                    style={{width: '45%', textAlign: 'center', marginLeft: '10px'}}
                                    value={maxPrice}
                                    onChange={(e) => {
                                        onInputChange('max', e.target.valueAsNumber);
                                    }}
                                />
                            </div>
                            <Slider
                                range
                                min={0}
                                max={100000}
                                value={[minPrice, maxPrice]}
                                onChange={handlePriceChange}
                                style={{margin: '20px', width: '80%'}}
                            />
                            {/* Shop items and additional filtering as needed */}
                        </div>
                    </div>
                    <div className="categorypage_products">
                        {
                            data.map(item => (
                                <div className="smartphones_box_slide" key={item.id}>
                                    <div className="smartphones_box_slide_img">
                                        <img src={item.img} alt={item.img}/>
                                    </div>
                                    <div className="smartphones_box_slide_text">
                                        <Link to={'/'} className='smartphones_box_slide_text_title'>{item.title}</Link>
                                        <div className="smartphones_box_slide_text_grade">
                                            <i className='sm_icon'><FaStar/></i>
                                            <p className='smartphones_box_slide_text_star'>{item.grade}
                                                <span>( {item.comment} Comments )</span></p>
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