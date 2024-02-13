// Components
import MainCarusel from '../components/MainCarusel'
import Smartphones from '../components/Smartphones'
import Categories from '../components/Categories'
import KreditCart from '../components/KreditCart'
import {useEffect, useState} from "react";
import {indexApi} from "../data/indexApi.js";

const Home = () => {

const [indexResponse, setIndexResponse] = useState(null);

useEffect(() => {
const getIndex = async () => {
const response = await indexApi.getIndex();
setIndexResponse(response);
}

getIndex();
}, []);

return (
<>
  {
  indexResponse && indexResponse.data.map(item => (
  <>
    {
    item.type === "main_slider" &&
    <MainCarusel data={item.content}/>
    }
    {
    item.type === "product_list"&& item.order === "2" &&
    <Smartphones data={item.content} name={item.name} />
    }
    {
    item.type === "category_list" && item.order === "3" &&
    <Categories data={item.content} name={item.name} />
    }
    {
    item.type === "product_list"&& item.order === "4" &&
    <Smartphones data={item.content} name={item.name} />
    }
  </>
  ))
  }
  <KreditCart />
  {
  indexResponse && indexResponse.data.map(item => (
  <>
    {
    item.type === "product_list"&& item.order === "5" &&
    <Smartphones data={item.content} name={item.name} />
    }
  </>
  ))
  }
</>
)
}

export default Home;