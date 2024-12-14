import userModel from '../models/userModel.js';

//add items to user cart
const addToCart = async(req,res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true , message:"added to cart"});

    }catch(error){
        res.json({success:false , message:"This optionality is not working currently"})
    }
}

//remove items from user cart
const removeFromCart = async(req,res ) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] && cartData[req.body.itemId] > 1) {
            cartData[req.body.itemId] -= 1;
        } else if (cartData[req.body.itemId]) {
            delete cartData[req.body.itemId];
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true , message:"Removed from cart"})

    }catch(error){
        res.json({
          success: false,
          message: "This optionality is not working currently",
        });

    }
}


//fetch user cart date
const getCart = async(req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true , cartData})
    }catch(error){
        res.json({
          success: false,
          message: "This optionality is not working currently",
        });
    }
}
export {addToCart,removeFromCart , getCart}