import {join} from 'path'
const homwController = (req,res) => {
    res.sendFile(join(process.cwd(), 'views', 'index.html'))
}

export { homwController}