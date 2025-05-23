import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { MakeContactPersonApi } from "../services/Api.js";
import HomePage from "../pages/HomePage";
import MakeContact from "../components/MakeContact";
import EditContact from "../components/EditContact.jsx";

export const UserProvider = createContext();
export const UserDeleteGroup = createContext();

const Router = () => {
  const [data, setData] = useState([]);
  const [deleteGroup, setDeleteGroup] = useState({
    check: false,
    dataContact: [],
  });

  useEffect(() => {
    axios.get(MakeContactPersonApi()).then((res) => setData(res.data));
  }, []);

  return (
    <UserProvider.Provider value={{ data, setData }}>
      <UserDeleteGroup.Provider value={{ deleteGroup, setDeleteGroup }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="make-contact" element={<MakeContact />} />
          <Route path="edit-contact/:id" element={<EditContact />} />
        </Routes>
      </UserDeleteGroup.Provider>
    </UserProvider.Provider>
  );
};

export default Router;
