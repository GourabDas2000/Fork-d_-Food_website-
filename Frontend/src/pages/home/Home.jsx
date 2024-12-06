import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import './home.css';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
function Home() {
  const [category , setcategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category ={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home