import { JWT_SECRET } from "../config";
import jwt from 'jsonwebtoken';
class JwtService {
    static sign(payload,secret=JWT_SECRET) {
        return jwt.sign(payload,secret)
    }
    static verify(token,secret=JWT_SECRET) {
        return jwt.verify(token,secret);
    }
}

export default JwtService