import JwtService from "../services/JwtService";

const fetchUser=(req, res, next)=>{
    // get the user from the jwt token and addid to req object
    console.log("someone come")
    const token=req.header('auth-token');
    if(!token){
        return res.status(401).send({error:"Please  authenticate using a valid token"})
    }
    try {
        
        const data=JwtService.verify(token);
        req.user=data;
        next();
    } catch (error) {
        return res.status(401).send({error:"Please authenticate using a valid token"})
    }
}

export default fetchUser;