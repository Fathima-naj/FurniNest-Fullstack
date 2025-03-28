const asyncHandler=require('../utilis/asyncHandler');
const CustomError=require('../utilis/customError');

const isAdmin=asyncHandler(async(req,res,next)=>{
    if(!req.user||!req.user.isAdmin){
        throw new CustomError('Access denied . Admin only',403)
    }
    next()
})
module.exports=isAdmin