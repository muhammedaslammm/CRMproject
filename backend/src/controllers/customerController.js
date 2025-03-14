import Customer from "../models/customerModel.js";

export const createCustomer = async (req, res) => {
  try {
    const { username, email, address, postcode, phone } = req.body;
    const matchingCustomer = await Customer.findOne({ email });
    if (matchingCustomer)
      return res.status(409).json({
        success: false,
        existing_email: true,
        message: "email already taken",
      });
    const new_customer = new Customer({
      userid: req.userid,
      username,
      email,
      address: { address, postcode, phone },
    });
    const customer = await new_customer.save();
    console.log("customer created");

    res.json({ success: true, message: "customer created", customer });
  } catch (error) {
    console.log(error.message);

    res.json({ success: false, message: error.message });
  }
};

export const updateCustomer = () => {};

// delete a customer
export const deleteCustomer = async (req, res) => {
  try {
    const { customerid } = req.params;
    await Customer.deleteOne({ _id: customerid });
    console.log("user deletion response");

    res.json({ sccess: true, message: "customer deleted", customerid });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// get all customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({ userid: req.userid }).populate(
      "dealid"
    );
    return res.json({ customers });
  } catch (error) {
    res.json({ error: error.message });
  }
};
