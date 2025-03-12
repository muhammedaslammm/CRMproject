import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String, required: true },
  address: {
    address: { type: String, required: true },
    postcode: { type: Number, required: true },
    phone: { type: Number, required: true },
  },
  dealid: { type: mongoose.Schema.Types.ObjectId },
  noteid: { type: mongoose.Schema.Types.ObjectId },
});

const Customer = mongoose.model("customer", CustomerSchema);

export default Customer;
