import {join} from 'path'
const homeController = (req,res) => {
    res.render('index', {title: 'Home', message: 'Welcome to my website'})
}

export { homeController}