import moongoes from 'mongoose';

const userSchema  = new moongoes.Schema({
    name:{type:String , required :true},
    email:{type:String , required:true , unique:true} ,
    password:{type:String , required:true},
    cartData :{type:Object , default:{}}
},{minimize:false})

const userModel = moongoes.models.user || moongoes.model("user" , userSchema);
export default userModel