const express=require('express')
const app=express()
const cors=require('cors')
const contoller=require('./controllers/authenticationController')
const errorGlobalMiddleware=require('./controllers/errorController.js/globalErrorMiddleware')
const asyncErrorHandler=require('./utils/asyncGlobalHandler')
const errorHandler=require('./errorHandler')


app.use(cors())

app.use('/getFibnocci',asyncErrorHandler(async(err,req,res,next)=>{
    console.log(req.body.number)
    const fibnocciResult=getFibnocci(req.body.number)
    res.status(200).json({result:fibnocciResult})
}))



app.use('/get-day',contoller.getDay)

app.use('/get-data',contoller.getData)

app.use(errorHandler)



app.listen(7001)