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
    }
    static delete_session = (req,res) => {
        req.session.destroy((err) => {
            if(err) console.log(err)
            else res.send("session deleted")
        })
    }
    static regenerate_session = (req,res) => {
        req.session.regenerate((err) => {
            if(err) console.log(err)
            else res.send("session regenerated")
        })
    }
    static session_example = (req,res) => {
        if(req.session.count){
            req.session.count++

        }else {
            req.session.count = 1
        }
        res.send(`count : ${req.session.count} ${req.session.device}`)
    }
}
export { StudentController}