const errorHandler=(err,req,res,next)=>{
    console.log("error ",err)
    const statusCode=err.statusCode || 500
    const message=err.message || "internal server error"

    res.status(statusCode).json({
        status:'error',
        message
    })
}
module.exports=errorHandler
