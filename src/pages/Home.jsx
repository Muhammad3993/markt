import React from 'react'
// Components
import MainCarusel from '../components/MainCarusel'
import Smartphones from '../components/Smartphones'
import Categories from '../components/Categories'
import Laptop from '../components/Laptop'
import KreditCart from '../components/KreditCart'
import Accessories from '../components/Accessories'

const Home = () => {
  return (
    <>
      <MainCarusel />
      <Smartphones />
      <Categories />
      <Laptop />
      <KreditCart />
      <Accessories />
    </>
  )
}

export default Home