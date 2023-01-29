import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import CardInfo from "../src/components/Cards/CardInfo";
import { useState, useEffect } from "react";

function App() {
  const [cardItem, setCardItem] = useState([]);
  const [store, setStore] = useState([]);
  const [users, setUsers] = useState([]);

  const AddItem = () => {
    const newItem = {
      id: store.id,
      title: store.title,
      description: store.description,
      price: store.price,
      images: store.images,
    };
    setCardItem([...cardItem, newItem]);
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
    <Routes>
      <Route path="/" element={<Landing store={store} users={users} cardItem={cardItem} />} />
      <Route path="/:id" element={<CardInfo onAddItem={AddItem} cardItem={cardItem} />} />
    </Routes>
  );
}

export default App;
