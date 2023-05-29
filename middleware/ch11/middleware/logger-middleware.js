var mylogger = (req,res,next) =>{
    console.log('legen in')
    next()
}
export default mylogger