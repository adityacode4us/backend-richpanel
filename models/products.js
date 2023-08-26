import mongoose from 'mongoose'
const { Schema } = mongoose;

  const ProductSchema = new Schema({
      user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
      },
    product_name:{
        type:String,
        required:true,

    },
    product_price:{
        type:Number,
        required:true,
        
    },
    discount:{
        type:Number,
        
    },
    tag:{
        type:String,
        default:"best-seller"
    },
    Date:{
        type:Date,
        default:Date.now
    }
  });

  export default mongoose.model('Products',ProductSchema,'products');