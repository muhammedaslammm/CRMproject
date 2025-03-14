import { createContext, useState, useEffect } from "react";

export const CustomersContext = createContext();
export const CustomersProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:3700/api/customers", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          if (data.customers) {
            setCustomers(data.customers);
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCustomers();
  }, []);

  const addCustomer = async (userData) => {
    try {
      const response = await fetch("http://localhost:3700/api/customers", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) throw data;
      else {
        setCustomers((prevCustomers) => [...prevCustomers, data.customer]);
        return { success: true, message: "user created" };
      }
    } catch (error) {
      return { success: false, ...error };
    }
  };

  // delete customer
  const deleteCustomer = async (customerid) => {
    try {
      const response = await fetch(
        `http://localhost:3700/api/customers/${customerid}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      else {
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer._id != data.customerid)
        );
        return data;
      }
    } catch (error) {
      return { message: error.message };
    }
  };

  const value = { customers, addCustomer, deleteCustomer };

  return (
    <CustomersContext.Provider value={value}>
      {children}
    </CustomersContext.Provider>
  );
};
