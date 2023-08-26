import Products from "../../models/products";

const fetchSingleProduct={
    async fetchSingleProduct(req,res,next){
        try{
            const products=await Products.find({user:req.user._id,product_name:req.body.product_name})
            res.json(products)
        }catch(err){
            return next(err);
        }
    }
}

export default fetchSingleProduct;