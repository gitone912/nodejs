import mongoose from "mongoose";



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
const getAllDoc = async () => {
    // const result = await StudentModel.find()
    // console.log(result)
    // result.forEach((doc) => {
    //     console.log(doc.name, doc.age, doc.fees.toString(), doc.hobbies[0],doc.hobbies[1],doc.isStudying,doc.comments[0].value,doc.comments[0].publish,doc.join )
    // })
    // const result2 = await StudentModel.find().select('name age')
    // console.log(result2)
    const result3 = await StudentModel.find().select({name:1,age:1})
    // console.log(result3)
    // const result4 = await StudentModel.find({name:'akash'}).select({name:1,age:1})
    // console.log(result4)

}
const updateDoc = async (id) => {
    try {
        await StudentModel.updateOne({_id:id},{$set:{name:'akane'}})
        // await StudentModel.updateOne({_id:id},{$set:{name:'akanichi',age:20}},{upsert:true}) 
        // updatemany also works
    } catch (error) {
        console.log(error)
    }

};

const deleteDoc = async (id) => {
    try {
        await StudentModel.deleteOne({_id:id})
    } catch (error) {
        console.log(error)
    }
}
export {getAllDoc,updateDoc,deleteDoc};



