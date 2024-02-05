import {useState} from "react"
// img
import img from "../images/img2.png";
// icons
import {BsTrash3Fill} from "react-icons/bs";
import {FaMinus, FaPlus} from "react-icons/fa";
// data
const data = [
    {
        id: 1,
        img: img,
        title: "IPhone 13 Pro Max",
        grade: 5,
        comment: 1,
        price: 650,
        discount: 500,
    },
]
const CartPage = () => {
    const [count, setCount] = useState(0);
    const [deleteMain, setDeleteMain] = useState(true)

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <div className="cart_page">
            <div className="container">
                <div className="cart_page_box">
                    <p className="cart_page_box_title">My cart <span>(0 products)</span></p>
                    <div className="cart_page_box_section">
                        <div className="cart_page_box_section_products">
                            {
                                data.map(item => (
                                    <div key={item.id} className="cart_page_box_section_product">
                                        <div className="cart_page_box_section_product_img">
                                            <img src={item.img} alt={item.title}/>
                                        </div>
                                        <div className="cart_page_box_section_product_text">
                                            <p className="cart_page_box_section_product_text_p">{item.title}</p>
                                        </div>
                                        <div className="cart_page_box_section_product_county">
                                            <button onClick={handleDecrement}><FaMinus /></button>
                                            <span>{count}</span>
                                            <button onClick={handleIncrement}><FaPlus /></button>
                                        </div>
                                        <div className="cart_page_box_section_product_costs">
                                            <div className="cart_page_box_section_product_costs_trash" onClick={() => setDeleteMain(!deleteMain)}>
                                                <p className="cart_page_box_section_product_costs_trash_i"><BsTrash3Fill/></p>
                                                <p>Delete</p>
                                            </div>
                                            <p className="cart_page_box_section_product_costs_price">$ {item.price}</p>
                                            <p className="cart_page_box_section_product_costs_discount">$ <span>{item.discount}</span></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="cart_page_box_section_order">
                            <p className="cart_page_box_section_order_title">My order</p>
                            <div className="cart_page_box_section_order_products_costs">
                                <p className="cart_page_box_section_order_products_count">Products (0):</p>
                                <p className="cart_page_box_section_order_products_cost">$ <span>0.00</span></p>
                            </div>
                            <div className="cart_page_box_section_order_products_costs">
                                <p className="cart_page_box_section_order_products_count">Total:</p>
                                <p className="cart_page_box_section_order_products_cost">$ <span>0.00</span></p>
                            </div>
                            <div className="cart_page_box_section_order_products_costs">
                                <p className="cart_page_box_section_order_products_count">Your saving:</p>
                                <p className="cart_page_box_section_order_products_cost">$ <span>0.00</span></p>
                            </div>
                            <button className="cart_page_box_section_order_btn">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={!deleteMain ? "delete_cancel delete_cancel_open" : "delete_cancel"}>
                <div className="delete_cancel_box">
                    <button className="cancel_box" onClick={() => setDeleteMain(!deleteMain)}>Cancel</button>
                    <button className="delete_box">Yes Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CartPage;