import { useState } from 'react'

// Icon
import { FaStar ,FaRegStarHalfStroke ,FaCartShopping , FaHeart } from "react-icons/fa6";

// data
const data = [
    {
        id: 1,
        title: "Lenovo V15 ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque aperiam, debitis perferendis molestiae quas. Animi officiis illum quas et! Maiores, reiciendis. Mollitia maiores aliquam dolore, deserunt error quas a.",
        count: 1,
        price: 650,
        sale_price: 12
    }
]

//images
import img1 from '../images/img.png'



const Detail = () => {
    const [images] = useState({
        img1 : img1,
        img2 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img3 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img4 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        // money : "jfhvrfhbvfhvbihv"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    return (
        <div>
            <div className='main-wrapper'>
                <div className="container">
                    <div className="product-div">
                        <div className="product-div-left">
                            <div className="img-container">
                                <div className="main_img_style">
                                    <img className='details_img' src={activeImg} alt="" />
                                </div>
                            </div>
                            <div className="hover-container">
                                <div>
                                    <img className='details_img img_dynamic' src={images.img1} alt=""  onClick={() => setActiveImage(images.img1)}/>
                                </div>
                                <div>
                                    <img className='details_img img_dynamic' src={images.img2} alt=""  onClick={() => setActiveImage(images.img2)}/>
                                </div>
                                <div>
                                    <img className='details_img img_dynamic'src={images.img3} alt=""  onClick={() => setActiveImage(images.img3)}/>
                                </div>
                                <div>
                                    <img className='details_img img_dynamic'  src={images.img4} alt=""  onClick={() => setActiveImage(images.img4)}/>
                                </div>

                            </div>
                        </div>
                        {
                            data.map( item => (
                                <div className="product-div-right" key={item.id}>
                                    <span className='product-name'>{item.title}</span>
                                    <span className='product-price'>Price $ {item.price}</span>
                                    <span className='sale-price'>Sale % {item.sale_price}</span>
                                    <span className="product-rating">
                                                <i><FaStar /></i>
                                                <i><FaStar /></i>
                                                <i><FaStar /></i>
                                                <i><FaStar /></i>
                                                <i><FaRegStarHalfStroke /></i>
                                            </span>
                                    <p>{item.description}</p>
                                    <div className="btn-groups">
                                        <button type='button' className='add-cart-btn'>
                                            <i><FaCartShopping /></i>
                                            Add to Cart
                                        </button>
                                        <button type='button' className='wishlist-btn'>
                                            <i><FaHeart /></i>
                                            Wishlist
                                        </button>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;

