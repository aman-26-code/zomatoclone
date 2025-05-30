import React, { useState } from 'react'
import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisply/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

    const [category,setCategory] = useState("All");
  return (
    <div>
      <header></header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
    </div>
  )
}

export default Home
