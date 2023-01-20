import Header from "../src/components/Header";
import Cards from "../src/components/Cards/Cards";
import Footer from "../src/components/Footer";
import Tabel from "../src/components/Table/Table";
import { useEffect, useState } from "react";

function App() {
  const [store, setStore] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getStore = async () => {
      const res = await fetch(
        "https://api.escuelajs.co/api/v1/products?offset=1&limit=6"
      ).then((res) => res.json());
      setStore(res);
    };
    getStore();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(
        "https://api.escuelajs.co/api/v1/users?offset=0&limit=8"
      ).then((res) => res.json());
      setUsers(res);
    };
    getUsers();
  }, []);

  return (
    <div>
      <Header />
      <Cards store={store} />
      <Tabel users={users} />
      <Footer />
    </div>
  );
}

export default App;
