import Header from "../src/components/Header";
import Cards from "../src/components/Cards/Cards";
import Footer from "../src/components/Footer";
import Tabel from "../src/components/Table/Table";
import { useEffect, useState } from "react";

function App() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    const getStore = async () => {
      const res = await fetch(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=6"
      ).then((res) => res.json());
      setStore(res);
    };
    getStore();
  }, []);

  return (
    <div>
      <Header />
      <Cards store={store} />
      <Tabel />
      <Footer />
    </div>
  );
}

export default App;
