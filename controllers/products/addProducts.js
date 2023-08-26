import Products from "../../models/products";
import Joi from 'joi';
const addProduct={
    async addProduct(req,res,next){
         //validation
         const addSchema= Joi.object({
            product_name:Joi.string().min(6).max(30).required(),
            product_price:Joi.number().required(),
        });
        // console.log(req.body)
        const {error}=addSchema.validate(req.body);
        if(error){
            return next(error); 
        }

        try{
            const {product_name,product_price}=req.body;
            const product=new Products({
                product_name, product_price,  user:req.user._id
            })
            const result=await product.save();
            res.json(result);
        }catch(err){
            return next(err);
        }
    }
}

export default addProduct;