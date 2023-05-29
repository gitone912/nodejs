// const connectdb = () =>{
//     return mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
//         console.log('Connected to MongoDB');
//         }).catch(err => {
//         console.log(err);
//         });}

const connectdb = async(DB_URL) =>{
    try{
        const DB_OPTIONS = {
            dbName: 'frozen_db',
        }
        await mongoose.connect(DB_URL,DB_OPTIONS, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connected to MongoDB');
    }catch(err){
        console.log(err);
    }
}

export default connectdb;