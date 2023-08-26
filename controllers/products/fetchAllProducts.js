import Products from "../../models/products";

const fetchAllProducts={
    async fetchAllProducts(req,res,next){
        try{
            const products=await Products.find({user:req.user._id})
            res.json(products)
        }catch(err){
            return next(err);
        }
    }
}

export default fetchAllProducts;