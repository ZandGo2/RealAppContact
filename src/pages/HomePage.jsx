import React, { createContext, useEffect, useState } from "react";
import axois from "axios";
import ListContact from "../components/ListContact";
import { MakeContactPersonApi } from "../services/Api.js";
import Search from "../components/Search.jsx";

export const UserProvider = createContext();
const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axois.get(MakeContactPersonApi()).then((res) => setData(res.data));
  }, []);

  return (
    <UserProvider.Provider value={data}>
      <Search />
      <ListContact />
    </UserProvider.Provider>
  );
};

export default HomePage;
