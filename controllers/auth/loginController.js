import Joi from 'joi';
import CustomErrorHandler from '../../services/CustomErrorHandler';
import { User } from '../../models';
import bcrypt from 'bcrypt';
import JwtService from '../../services/JwtService'
const loginController={
    async login(req,res,next){
        //validation
        console.log("someone ccome for login")
        const loginSchema= Joi.object({
            email:Joi.string().email().required(),
            password:Joi.string().min(6).max(30).required(),
        });
        // console.log(req.body)
        const {error}=loginSchema.validate(req.body);
        if(error){
            return next(error); 
        }

        try{
            const user=await User.findOne({email:req.body.email});
            if(!user){
                return next(CustomErrorHandler.credentials());
            }
            const match=await bcrypt.compare(req.body.password,user.password);
            if(!match){
                return next(CustomErrorHandler.credentials());
            }

            //Token
            const authtoken=JwtService.sign({_id:user._id,role:user.role});
            console.log("seccuss")
            return res.json({authtoken,message:"You are successfully logged in"});
        }catch(err){
            return next(err);
        }

        
    }
}

export default loginController;