import mongoose from 'mongoose';


const userSchema= mongoose.Schema({

username :{type :String, require :{true :"Username is Reguired"}},
email :{type :String, require :{true :"Email is Reguired"}},
password :{type :String, require :{true :"Password is Reguired"}},
 blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
      },
    ],
},{timestamps:true})



const userModel = mongoose.model("User", userSchema);

export default userModel; // Use export default to export the userModel