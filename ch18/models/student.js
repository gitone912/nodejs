import mongoose from "mongoose";


const createDoc = async () => {
    try {
        const studentScema = new mongoose.Schema({
            // _id :{type:Number},
            name: {type : String , required : true , trim : true},    
            age: {type : Number},
            fees : {type:mongoose.Decimal128, validate: v => v>= 5500},
            hobbies : {type: Array},
            isStudying : {type: Boolean, default: true},
            comments : [{value:{type:String},publish:{type:Date,default:Date.now}}],
            join: { type:Date ,default:Date.now}
        })
        const StudentModel = mongoose.model('student', studentScema)
        const StudentDoc = new StudentModel({
            name: ' akash',
            age: 21,
            fees :6000.54,
            hobbies: ['chess','freezing'],
            isStudying: true,
            comments : [{value:'freezing everyone'}]
        })

        const result = await StudentDoc.save()
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}

export default createDoc;



