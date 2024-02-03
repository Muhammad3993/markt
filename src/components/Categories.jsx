import React from 'react'
// React router dom
import { Link } from 'react-router-dom'
// React icons
import { IoIosArrowRoundForward } from "react-icons/io";
// img
import img from "../images/img1.png";
import img1 from "../images/img2.png";
import img2 from "../images/img3.jpg";

const data = [
    {
        id: 1,
        img: img,
        title: "Laptop",
    },
    {
        id: 2,
        img: img1,
        title: "Smartphone",
    },
    {
        id: 3,
        img: img2,
        title: "TV",
    },
];

const Categories = () => {
    return (
        <div className='categories'>
            <div className="container">
                <div className="categories_box">
                    <div className="categories_box_top">
                        <p className='title'>Categories</p>
                        <Link to={'/category'} className='cat_link'>Go to all <i className='cat_icon'><IoIosArrowRoundForward /></i></Link>
                    </div>
                    <div className="categories_box_body">
                        {
                            data.map(item => (
                                <Link to={'/'} className="cat_box" key={item.id}>
                                    <div className="cat_box_img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <p className='cat_box_title'>{item.title}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories