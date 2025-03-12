import { createContext, useState, useEffect } from "react";

export const CustomersContext = createContext();
export const CustomersProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("https://localhost:3700/api/customers", {
          method: "GET",
          credentials: "include",
        });
        const data = await response();
        if (!response.ok) throw new Error(data.message);
        else {
          setCustomers(data.customers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCustomers();
  }, []);

  const value = { customers };

  return (
    <CustomersContext.Provider value={value}>
      {children}
    </CustomersContext.Provider>
  );
};
