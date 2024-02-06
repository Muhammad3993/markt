// data
import img from "../images/img2.png";
import {Link} from "react-router-dom";
import {FaHeart, FaStar} from "react-icons/fa";
import {IoIosCart} from "react-icons/io";

const data = [
    {
        id: 1,
        img: img,
        title: "IPhone 13 Pro Max",
        grade: 5,
        comment: 1,
        price: 650,
    },
]
const Cart = () => {
    return (
        <div className="wishlist_page">
            <div className="container">
                <div className="wishlist_page_products">
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
                                            <i className='sm_icon'><IoIosCart/></i>
                                            <p>Add to</p>
                                        </button>
                                    </div>
                                </div>
                                <button className="sm_item_heart">
                                    <ip><FaHeart/></ip>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart;