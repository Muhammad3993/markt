import React from 'react'
// React router dom
import { Link } from 'react-router-dom'
// React icons
import { IoIosArrowRoundForward } from "react-icons/io";

const Categories = ({data, name}) => {
    return (
        <div className='categories'>
            <div className="container">
                <div className="categories_box">
                    <div className="categories_box_top">
                        <p className='title'>{name}</p>
                        <Link to={'/category'} className='cat_link'>Go to all <i className='cat_icon'><IoIosArrowRoundForward /></i></Link>
                    </div>
                    <div className="categories_box_body">
                        {
                            data.slice(0, 3).map(item => (
                                <Link to={'/'} className="cat_box" key={item.id}>
                                    <div className="cat_box_img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <p className='cat_box_title'>{item.name}</p>
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