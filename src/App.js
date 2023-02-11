import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import CardInfo from "../src/components/Cards/CardInfo";
import { useState, useEffect, memo } from "react";
import { Context } from "../src/context";

function App() {
  const [cardItem, setCardItem] = useState([]);
  const [store, setStore] = useState([]);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(!open);
  };

  const AddItem = (id, { title, description, price }, image) => {
    setCardItem((prev) => [
      ...prev,
      {
        id: id,
        title: title,
        description: description,
        price: price,
        image: image,
      },
    ]);
  };

  const RemoveItem = (id) => {
    setCardItem(cardItem.filter((item) => item.id !== id));
  };

  const getStore = async () => {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=1&limit=6"
    ).then((res) => res.json());
    setStore(res);
  };

  const getUsers = async () => {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/users?offset=0&limit=8"
    ).then((res) => res.json());
    setUsers(res);
  };

  useEffect(() => {
    getStore();
    getUsers();
  }, []);

  return (
    <Context.Provider
      value={{ store, users, cardItem, open, openHandler, RemoveItem }}
    >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:id" element={<CardInfo AddItem={AddItem} />} />
      </Routes>
    </Context.Provider>
  );
}

export default memo(App);
