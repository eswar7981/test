module.exports=(error,req,res,next)=>{
    res.status(error.statusCode).json({Message:error.message})
}