import Customer from "../models/customerModel.js";
import Deal from "../models/dealsModel.js";

export const getDeals = async (req, res) => {
  try {
    const deals = await Deal.find({ userid: req.userid });
    res.json({ success: true, deals });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createDeal = async (req, res) => {
  try {
    const data = req.body;
    const new_deal = new Deal({ ...data, userid: req.userid });
    const deal = await new_deal.save();
    await Customer.updateOne(
      { _id: data.customerid },
      { $push: { dealid: deal._id } }
    );

    res.json({ success: true, message: "deal created", deal });
  } catch (error) {
    console.log("createDeal error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
