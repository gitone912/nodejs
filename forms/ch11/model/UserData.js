import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  dob: { type: String, required: true },
  pincode: { type: Number, required: true },
  course: { type: String, required: true },
  emailId: { type: String, required: true }
});

const ApplicationModel = mongoose.model('Application', applicationSchema);
