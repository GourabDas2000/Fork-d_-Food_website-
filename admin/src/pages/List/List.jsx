import React, { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios';
import {toast} from 'react-toastify'

const List = () => {
  const url = import.meta.env.VITE_API_URL;
  const [list , setlist] = useState([]);
  const fetchLitst = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setlist(response.data.data); 
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Failed to fetch the list.");
    }
  };
  const removeFood = async(foodid) => {
    console.log(foodid);
    try{
      const response = await axios.delete(`${url}/api/food/remove`, { data: { id: foodid } });
      await fetchLitst();
      if(response.data.success){
        toast.success(response.data.message);
      }
      else{
        toast.error(response.error);
      }
    }catch(error){
      toast.error("Something went wrong");
    }finally{
      await fetchLitst();
    }
  }
  useEffect(() => {
    fetchLitst();
  },[])
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>
            Image
          </b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          list.map((item,index) =>{
            return(
              <div key={index} className="list-table-format">
                <img src={`${url}/images/` + item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p className='cursor' onClick={() => {removeFood(item._id)}}>X</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List