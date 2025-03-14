import mongoose from "mongoose";

const DealSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId },
  customerid: { type: mongoose.Schema.Types.ObjectId, required: true },
  deal_name: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "pending" },
  final_date: { type: String, required: true },
  notes: [{ type: mongoose.Schema.Types.ObjectId }],
});

const Deal = mongoose.model("deal", DealSchema);

export default Deal;
