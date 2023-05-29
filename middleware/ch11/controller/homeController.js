import {join} from 'path'

class StudentController{
    static get_session_info = (req ,res) =>{
        console.log(req.session)
        console.log(req.sessionID)
        console.log(req.session.cookie)
        console.log(req.session.cookie.maxAge)
        res.send("session info ..")
    }
    static homeController = (req,res) => {
        res.render('index', {title: 'Home', message: 'Welcome to my website'})
    }}

export { StudentController}