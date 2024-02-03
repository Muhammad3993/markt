import img from "../images/img2.png"
const data = [
    {
        id: 1,
        name: "Smartphone",
        img: img
    },
    {
        id: 2,
        name: "Smartphone",
        img: img
    },
    {
        id: 3,
        name: "Smartphone",
        img: img
    },
    {
        id: 4,
        name: "Smartphone",
        img: img
    },
    {
        id: 5,
        name: "Smartphone",
        img: img
    },
    {
        id: 6,
        name: "Smartphone",
        img: img
    },
    {
        id: 7,
        name: "Smartphone",
        img: img
    },
    {
        id: 8,
        name: "Smartphone",
        img: img
    },
    {
        id: 9,
        name: "Smartphone",
        img: img
    }
]
const Categoriess = () => {
  return (
    <div className='category'>
        <div className="container">
            <div className="category_boxes">
                {
                    data.map(item => (
                        <div className="category_box" key={item.id}>
                            <div className="category_box_img">
                                <img src={item.img} alt={item.img}/>
                            </div>
                            <p className="category_box_title">{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Categoriess