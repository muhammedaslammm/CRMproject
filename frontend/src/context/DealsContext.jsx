import { createContext, useState, useEffect } from "react";

export const DealsContext = createContext();
export const DealsProvider = ({ children }) => {
  const [deals, setDeals] = useState([]);
  useEffect(() => {
    const getAllDeals = async () => {
      try {
        const response = await fetch("http://localhost:3700/api/deals", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        else {
          setDeals(data.deals);
        }
      } catch (error) {
        console.log("error in fetching all deals:", error);
      }
    };
    getAllDeals();
  }, []);

  const addDeal = async (dealsData) => {
    try {
      const response = await fetch("http://localhost:3700/api/deals", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dealsData),
      });
      const data = await response.json();

      if (!response.ok) throw data;
      else {
        setDeals((prevDeals) => [...prevDeals, data.deal]);
        return data;
      }
    } catch (error) {
      return error;
    }
  };

  const value = { deals, addDeal };

  return (
    <DealsContext.Provider value={value}>{children}</DealsContext.Provider>
  );
};
