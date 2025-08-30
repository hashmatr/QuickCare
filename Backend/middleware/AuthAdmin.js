import jwt from 'jsonwebtoken'

const AuthAdmin = async (req,res,next) => {
    try {
        const atoken = req.header;
        if(!atoken){
            res.json({
                success:false,
                message:"Not Authorized login Again!"
            })
        }
        const token_decode = jwt.verify(atoken,process.JWT_SECRET)
        if(token_decode!== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
             res.json({
                success:false,
                message:"Not Authorized login Again!"
            })
        }
        next()
    } catch (error) {
     console.log(error);
     res.json({
    success:false,
     message:error.message
        })
    }
}
export default AuthAdmin
