import Joi from 'joi';
import CustomErrorHandler from '../../services/CustomErrorHandler';
import { User } from '../../models';
import bcrypt from 'bcrypt';
import JwtService from '../../services/JwtService'
const registerController={
    async register(req,res,next){
        //validation
        const registerSchema= Joi.object({
            name:Joi.string().min(3).max(30).required(),
            email:Joi.string().email().required(),
            password:Joi.string().min(6).max(30).required(),
            confirm_password: Joi.ref('password')
        });
        // console.log(req.body)
        const {error}=registerSchema.validate(req.body);
        if(error){
            return next(error); 
        }

        try{
            const exist=await User.exists({email:req.body.email});
            if(exist){
                return next(CustomErrorHandler.alreadyExist('This email is already taken.'));
            }
        }catch(err){
            return next(err);
        }

        // Hash password
        const hashedpassword = await bcrypt.hash(req.body.password,10);

        // prepare the model
        const {name, email,password}=req.body;
        const user=new User({
            name:name,
            email:email,
            password:hashedpassword
        })
        let access_token;
        try{
            const result=await user.save();
            // Token
            access_token=JwtService.sign({_id: result._id, role: result.role})

        }catch(err){
            return next(err);
        }


        res.json({access_token:access_token})
    }
}

export default registerController;