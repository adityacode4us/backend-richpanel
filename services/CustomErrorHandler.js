class CustomErrorHandler extends Error{
    constructor(status,msg){
        super()
        this.status=status;
        this.message=msg;
    }

    static alreadyExist(message){
        return new CustomErrorHandler(409,message);
    }
    static credentials(message='username or password is invalid'){
        return new CustomErrorHandler(401,message);
    }
}
export default CustomErrorHandler;