import Header from "../components/Header";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer";
import Tabel from "../components/Table/Table";
import Modal from "./Modal/Modal";
import { Context } from "../context";
import { useContext } from "react";

const Landing = () => {
  const { store, users } = useContext(Context);
  return (
    <div>
      <Modal />
      <Header />
      <Cards store={store} />
      <Tabel users={users} />
      <Footer />
    </div>
  );
};

export default Landing;
