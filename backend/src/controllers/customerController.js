import Customer from "../models/customerModel.js";

export const createCustomer = () => {};

export const updateCustomer = () => {};

export const deleteCustomer = () => {};

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    return res.json({ customers });
  } catch (error) {
    res.json({ error: error.message });
  }
};
