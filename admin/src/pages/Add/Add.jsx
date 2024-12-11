import React, { useState , useEffect } from 'react'
import axios from 'axios'
import './add.css'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
const Add = () => {
  const url = import.meta.env.VITE_API_URL;
  const [image , setimage] = useState(false);

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);
  const [data  , setdata]  = useState({
    name:"",
    description : "",
    price : "",
    category:"Salad"
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata(data => ({...data ,[name]:value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData =new FormData();
    formData.append("name" , data.name);
    formData.append("description" , data.description);
    formData.append("price" , Number(data.price));
    formData.append("category" , data.category);
    formData.append("image" , image);
    const response = await axios.post(
      `${url}/api/food/add`,
      formData
    );
    if(response.data.Success){
      setdata({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setimage(false);
      toast.success(response.data.message);
    }
    else{
      toast.error(response.data.message);
    }
  }
  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => {
              setimage(e.target.files[0]);
            }}
            type="file"
            name=""
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows={6}
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="add your price"
              id=""
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add