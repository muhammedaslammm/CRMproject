import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  username: { type: String },
  userid: { type: mongoose.Schema.Types.ObjectId, required: true },
  email: { type: String, required: true },
  address: {
    address: { type: String, required: true },
    postcode: { type: Number, required: true },
    phone: { type: Number, required: true },
  },
  createdDate: { type: Date, default: Date.now },
  dealid: [{ type: mongoose.Schema.Types.ObjectId, ref: "deal" }],
});

const Customer = mongoose.model("customer", CustomerSchema);

export default Customer;
